// Create a single field index on the specified field in ascending order.
// Use 1 for ascending order and -1 for descending order.
db.collections_name.createIndex({field:1})

// Create a compound index on multiple fields.
// This example creates an index on 'fields' in ascending order and 'field' in descending order.
db.collections_name.createIndex({fields:1},{field:-1})

// Create a text index on the specified field.
// Text indexes are used for full-text search.
db.collections_name.createIndex({content:'text'})

// Create a hashed index on the specified field.
// Hashed indexes are used for equality comparisons.
db.collections_name.createIndex({email:'hashed'})

// Create a geospatial index on the specified field.
// Geospatial indexes are used for queries that involve geographic data.
// '2dsphere' is used for data stored as points on a sphere.
db.collections_name.createIndex({location:'2dsphere'})

// Retrieve all indexes on the collection.
// This command returns an array of documents that describe the indexes on the collection.
db.collections_name.getIndexes()
