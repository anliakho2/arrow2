use parquet2::{
    encoding::Encoding,
    metadata::ColumnDescriptor,
    page::DataPage,
    statistics::{deserialize_statistics, serialize_statistics, ParquetStatistics},
    write::WriteOptions,
};

use super::{binary::ord_binary, utils};
use crate::{
    array::{Array, FixedSizeBinaryArray},
    error::Result,
    io::parquet::read::is_type_nullable,
};

pub(crate) fn encode_plain(array: &FixedSizeBinaryArray, is_optional: bool, buffer: &mut Vec<u8>) {
    // append the non-null values
    if is_optional {
        array.iter().for_each(|x| {
            if let Some(x) = x {
                buffer.extend_from_slice(x);
            }
        })
    } else {
        buffer.extend_from_slice(array.values());
    }
}

pub fn array_to_page(
    array: &FixedSizeBinaryArray,
    options: WriteOptions,
    descriptor: ColumnDescriptor,
) -> Result<DataPage> {
    let is_optional = is_type_nullable(descriptor.type_());
    let validity = array.validity();

    let mut buffer = vec![];
    utils::write_def_levels(
        &mut buffer,
        is_optional,
        validity,
        array.len(),
        options.version,
    )?;

    let definition_levels_byte_length = buffer.len();

    encode_plain(array, is_optional, &mut buffer);

    let statistics = if options.write_statistics {
        build_statistics(array, descriptor.clone())
    } else {
        None
    };

    utils::build_plain_page(
        buffer,
        array.len(),
        array.null_count(),
        0,
        definition_levels_byte_length,
        statistics,
        descriptor,
        options,
        Encoding::Plain,
    )
}

pub(super) fn build_statistics(
    array: &FixedSizeBinaryArray,
    descriptor: ColumnDescriptor,
) -> Option<ParquetStatistics> {
    let pq_statistics = &ParquetStatistics {
        max: None,
        min: None,
        null_count: Some(array.null_count() as i64),
        distinct_count: None,
        max_value: array
            .iter()
            .flatten()
            .max_by(|x, y| ord_binary(x, y))
            .map(|x| x.to_vec()),
        min_value: array
            .iter()
            .flatten()
            .min_by(|x, y| ord_binary(x, y))
            .map(|x| x.to_vec()),
    };
    deserialize_statistics(pq_statistics, descriptor)
        .map(|e| serialize_statistics(&*e))
        .ok()
}
