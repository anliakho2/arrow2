var N = null;var sourcesIndex = {};
sourcesIndex["arrow2"] = {"name":"","dirs":[{"name":"array","dirs":[{"name":"binary","files":["ffi.rs","from.rs","iterator.rs","mod.rs","mutable.rs"]},{"name":"boolean","files":["ffi.rs","from.rs","iterator.rs","mod.rs","mutable.rs"]},{"name":"dictionary","files":["ffi.rs","iterator.rs","mod.rs","mutable.rs"]},{"name":"equal","files":["binary.rs","boolean.rs","dictionary.rs","fixed_size_binary.rs","fixed_size_list.rs","list.rs","map.rs","mod.rs","null.rs","primitive.rs","struct_.rs","union.rs","utf8.rs"]},{"name":"fixed_size_binary","files":["ffi.rs","iterator.rs","mod.rs","mutable.rs"]},{"name":"fixed_size_list","files":["ffi.rs","iterator.rs","mod.rs","mutable.rs"]},{"name":"growable","files":["binary.rs","boolean.rs","dictionary.rs","fixed_binary.rs","fixed_size_list.rs","list.rs","mod.rs","null.rs","primitive.rs","structure.rs","utf8.rs","utils.rs"]},{"name":"list","files":["ffi.rs","iterator.rs","mod.rs","mutable.rs"]},{"name":"map","files":["ffi.rs","iterator.rs","mod.rs"]},{"name":"primitive","files":["display.rs","ffi.rs","from_natural.rs","iterator.rs","mod.rs","mutable.rs"]},{"name":"struct_","files":["ffi.rs","iterator.rs","mod.rs"]},{"name":"union","files":["ffi.rs","iterator.rs","mod.rs"]},{"name":"utf8","files":["ffi.rs","from.rs","iterator.rs","mod.rs","mutable.rs"]}],"files":["display.rs","ffi.rs","mod.rs","null.rs","ord.rs","physical_binary.rs","specification.rs"]},{"name":"bitmap","dirs":[{"name":"utils","dirs":[{"name":"chunk_iterator","files":["chunks_exact.rs","merge.rs","mod.rs"]}],"files":["fmt.rs","iterator.rs","mod.rs","slice_iterator.rs","zip_validity.rs"]}],"files":["bitmap_ops.rs","immutable.rs","mod.rs","mutable.rs"]},{"name":"buffer","files":["bytes.rs","foreign.rs","immutable.rs","mod.rs"]},{"name":"compute","dirs":[{"name":"aggregate","dirs":[{"name":"simd","files":["mod.rs","native.rs"]}],"files":["memory.rs","min_max.rs","mod.rs","sum.rs"]},{"name":"arithmetics","dirs":[{"name":"basic","files":["add.rs","div.rs","mod.rs","mul.rs","pow.rs","rem.rs","sub.rs"]},{"name":"decimal","files":["add.rs","div.rs","mod.rs","mul.rs","sub.rs"]}],"files":["mod.rs","time.rs"]},{"name":"cast","files":["binary_to.rs","boolean_to.rs","decimal_to.rs","dictionary_to.rs","mod.rs","primitive_to.rs","utf8_to.rs"]},{"name":"comparison","dirs":[{"name":"simd","files":["mod.rs","native.rs"]}],"files":["binary.rs","boolean.rs","mod.rs","primitive.rs","utf8.rs"]},{"name":"merge_sort","files":["mod.rs"]},{"name":"sort","dirs":[{"name":"primitive","files":["indices.rs","mod.rs","sort.rs"]}],"files":["binary.rs","boolean.rs","common.rs","lex_sort.rs","mod.rs","utf8.rs"]},{"name":"take","files":["binary.rs","boolean.rs","dict.rs","generic_binary.rs","list.rs","mod.rs","primitive.rs","structure.rs","utf8.rs"]}],"files":["arity.rs","bitwise.rs","boolean.rs","boolean_kleene.rs","concatenate.rs","contains.rs","filter.rs","hash.rs","if_then_else.rs","length.rs","like.rs","limit.rs","lower.rs","mod.rs","nullif.rs","partition.rs","regex_match.rs","substring.rs","temporal.rs","upper.rs","utils.rs","window.rs"]},{"name":"datatypes","files":["field.rs","mod.rs","physical_type.rs","schema.rs"]},{"name":"ffi","files":["array.rs","bridge.rs","ffi.rs","mod.rs","schema.rs"]},{"name":"io","dirs":[{"name":"avro","dirs":[{"name":"read","files":["block.rs","decompress.rs","deserialize.rs","header.rs","mod.rs","nested.rs","schema.rs","util.rs"]},{"name":"read_async","files":["block.rs","metadata.rs","mod.rs","utils.rs"]},{"name":"write","files":["block.rs","compress.rs","header.rs","mod.rs","schema.rs","serialize.rs","util.rs"]},{"name":"write_async","files":["block.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"csv","dirs":[{"name":"read","files":["deserialize.rs","infer_schema.rs","mod.rs","reader.rs"]},{"name":"read_async","files":["deserialize.rs","infer_schema.rs","mod.rs","reader.rs"]},{"name":"write","files":["mod.rs","serialize.rs"]}],"files":["mod.rs","read_utils.rs","utils.rs"]},{"name":"flight","files":["mod.rs"]},{"name":"ipc","dirs":[{"name":"read","dirs":[{"name":"array","files":["binary.rs","boolean.rs","dictionary.rs","fixed_size_binary.rs","fixed_size_list.rs","list.rs","map.rs","mod.rs","null.rs","primitive.rs","struct_.rs","union.rs","utf8.rs"]}],"files":["common.rs","deserialize.rs","mod.rs","read_basic.rs","reader.rs","schema.rs","stream.rs"]},{"name":"write","files":["common.rs","common_async.rs","common_sync.rs","mod.rs","schema.rs","serialize.rs","stream.rs","stream_async.rs","writer.rs"]}],"files":["compression.rs","endianess.rs","mod.rs"]},{"name":"json","dirs":[{"name":"read","files":["deserialize.rs","infer_schema.rs","iterator.rs","mod.rs"]},{"name":"write","files":["format.rs","mod.rs","serialize.rs"]}],"files":["mod.rs"]},{"name":"json_integration","dirs":[{"name":"read","files":["array.rs","mod.rs","schema.rs"]},{"name":"write","files":["array.rs","mod.rs","schema.rs"]}],"files":["mod.rs"]},{"name":"parquet","dirs":[{"name":"read","dirs":[{"name":"binary","files":["basic.rs","dictionary.rs","mod.rs","nested.rs","utils.rs"]},{"name":"boolean","files":["basic.rs","mod.rs","nested.rs"]},{"name":"fixed_size_binary","files":["mod.rs","utils.rs"]},{"name":"primitive","files":["basic.rs","dictionary.rs","mod.rs","nested.rs","utils.rs"]},{"name":"schema","files":["convert.rs","metadata.rs","mod.rs"]},{"name":"statistics","files":["binary.rs","boolean.rs","fixlen.rs","mod.rs","primitive.rs"]}],"files":["mod.rs","nested_utils.rs","record_batch.rs","utils.rs"]},{"name":"write","dirs":[{"name":"binary","files":["basic.rs","mod.rs","nested.rs"]},{"name":"boolean","files":["basic.rs","mod.rs","nested.rs"]},{"name":"primitive","files":["basic.rs","mod.rs","nested.rs"]},{"name":"utf8","files":["basic.rs","mod.rs","nested.rs"]}],"files":["dictionary.rs","fixed_len_bytes.rs","levels.rs","mod.rs","record_batch.rs","schema.rs","stream.rs","utils.rs"]}],"files":["mod.rs"]}],"files":["iterator.rs","mod.rs","print.rs"]},{"name":"scalar","files":["binary.rs","boolean.rs","dictionary.rs","equal.rs","fixed_size_binary.rs","fixed_size_list.rs","list.rs","mod.rs","null.rs","primitive.rs","struct_.rs","utf8.rs"]},{"name":"types","dirs":[{"name":"simd","files":["mod.rs","native.rs"]}],"files":["bit_chunk.rs","index.rs","mod.rs","native.rs","offset.rs"]},{"name":"util","files":["lexical.rs","mod.rs"]}],"files":["chunk.rs","error.rs","lib.rs","temporal_conversions.rs","trusted_len.rs"]};
createSourceSidebar();
