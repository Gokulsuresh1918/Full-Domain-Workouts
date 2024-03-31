db.createCollection("myCappedCollection", {
    capped: true,
    size: 10000000, // Size in bytes
    max: 5000 // Maximum number of documents
   });
   