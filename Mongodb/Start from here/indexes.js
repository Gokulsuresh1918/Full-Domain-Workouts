// Create a single field index on the specified field in ascending order.
// Use 1 for ascending order and -1 for descending order.
db.collections_name.createIndex({field:1})

// Create a compound index on multiple fields.
db.collections_name.createIndex({fields:1},{field:-1})

// Text indexes are used for full-text search.
db.collections_name.createIndex({content:'text'})

// Hashed indexes are used for equality comparisons.
db.collections_name.createIndex({email:'hashed'})

// '2dsphere' is used for data stored as points on a spher  e.
db.collections_name.createIndex({location:'2dsphere'})
//ttl index
db.collection.createIndex({ field: 1 }, { expireAfterSeconds: 3600 });

// This command returns an array of documents that describe the indexes on the collection.
db.collections_name.getIndexes()

db.COLLECTION_NAME.dropIndex(INDEX_NAME).
//drop all
db.COLLECTION_NAME.dropIndexes()
//explain index
db.users.find({ username: 'John' }).explain();
