use std::{io::Write, sync::Arc};

use arrow_format::ipc::planus::Builder;

use super::{
    super::IpcField,
    super::ARROW_MAGIC,
    common::{encode_chunk, DictionaryTracker, EncodedData, WriteOptions},
    common_sync::{write_continuation, write_message},
    default_ipc_fields, schema, schema_to_bytes,
};

use crate::array::Array;
use crate::chunk::Chunk;
use crate::datatypes::*;
use crate::error::{ArrowError, Result};

/// Arrow file writer
pub struct FileWriter<W: Write> {
    /// The object to write to
    writer: W,
    /// IPC write options
    options: WriteOptions,
    /// A reference to the schema, used in validating record batches
    schema: Schema,
    ipc_fields: Vec<IpcField>,
    /// The number of bytes between each block of bytes, as an offset for random access
    block_offsets: usize,
    /// Dictionary blocks that will be written as part of the IPC footer
    dictionary_blocks: Vec<arrow_format::ipc::Block>,
    /// Record blocks that will be written as part of the IPC footer
    record_blocks: Vec<arrow_format::ipc::Block>,
    /// Whether the writer footer has been written, and the writer is finished
    finished: bool,
    /// Keeps track of dictionaries that have been written
    dictionary_tracker: DictionaryTracker,
}

impl<W: Write> FileWriter<W> {
    /// Try create a new writer, with the schema written as part of the header
    pub fn try_new(
        mut writer: W,
        schema: &Schema,
        ipc_fields: Option<Vec<IpcField>>,
        options: WriteOptions,
    ) -> Result<Self> {
        // write magic to header
        writer.write_all(&ARROW_MAGIC[..])?;
        // create an 8-byte boundary after the header
        writer.write_all(&[0, 0])?;
        // write the schema, set the written bytes to the schema

        let ipc_fields = if let Some(ipc_fields) = ipc_fields {
            ipc_fields
        } else {
            default_ipc_fields(&schema.fields)
        };
        let encoded_message = EncodedData {
            ipc_message: schema_to_bytes(schema, &ipc_fields),
            arrow_data: vec![],
        };

        let (meta, data) = write_message(&mut writer, encoded_message)?;
        Ok(Self {
            writer,
            options,
            schema: schema.clone(),
            ipc_fields,
            block_offsets: meta + data + 8,
            dictionary_blocks: vec![],
            record_blocks: vec![],
            finished: false,
            dictionary_tracker: DictionaryTracker::new(true),
        })
    }

    /// Consumes itself into the inner writer
    pub fn into_inner(self) -> W {
        self.writer
    }

    /// Writes [`Chunk`] to the file
    pub fn write(
        &mut self,
        columns: &Chunk<Arc<dyn Array>>,
        ipc_fields: Option<&[IpcField]>,
    ) -> Result<()> {
        if self.finished {
            return Err(ArrowError::Io(std::io::Error::new(
                std::io::ErrorKind::UnexpectedEof,
                "Cannot write to a finished file".to_string(),
            )));
        }

        let ipc_fields = if let Some(ipc_fields) = ipc_fields {
            ipc_fields
        } else {
            self.ipc_fields.as_ref()
        };

        let (encoded_dictionaries, encoded_message) = encode_chunk(
            columns,
            ipc_fields,
            &mut self.dictionary_tracker,
            &self.options,
        )?;

        // add all dictionaries
        for encoded_dictionary in encoded_dictionaries {
            let (meta, data) = write_message(&mut self.writer, encoded_dictionary)?;

            let block = arrow_format::ipc::Block {
                offset: self.block_offsets as i64,
                meta_data_length: meta as i32,
                body_length: data as i64,
            };
            self.dictionary_blocks.push(block);
            self.block_offsets += meta + data;
        }

        let (meta, data) = write_message(&mut self.writer, encoded_message)?;
        // add a record block for the footer
        let block = arrow_format::ipc::Block {
            offset: self.block_offsets as i64,
            meta_data_length: meta as i32, // TODO: is this still applicable?
            body_length: data as i64,
        };
        self.record_blocks.push(block);
        self.block_offsets += meta + data;
        Ok(())
    }

    /// Write footer and closing tag, then mark the writer as done
    pub fn finish(&mut self) -> Result<()> {
        // write EOS
        write_continuation(&mut self.writer, 0)?;

        let schema = schema::serialize_schema(&self.schema, &self.ipc_fields);

        let root = arrow_format::ipc::Footer {
            version: arrow_format::ipc::MetadataVersion::V5,
            schema: Some(Box::new(schema)),
            dictionaries: Some(std::mem::take(&mut self.dictionary_blocks)),
            record_batches: Some(std::mem::take(&mut self.record_blocks)),
            custom_metadata: None,
        };
        let mut builder = Builder::new();
        let footer_data = builder.finish(&root, None);
        self.writer.write_all(footer_data)?;
        self.writer
            .write_all(&(footer_data.len() as i32).to_le_bytes())?;
        self.writer.write_all(&ARROW_MAGIC)?;
        self.writer.flush()?;
        self.finished = true;

        Ok(())
    }
}
