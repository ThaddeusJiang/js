/**
 * resolve https://github.com/grpc/grpc-node/issues/434
 */
export const options = {
  keepCase: true, // Keep field names as-is, don't convert to camelCase
  enums: String, // Keep enum values as strings instead of numeric values
  arrays: true, // Set empty arrays to `[]` instead of `undefined`
}
