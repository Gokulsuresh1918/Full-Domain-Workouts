db.collectionName.updateMany(
    {}, // Filter (empty to match all documents)
    { $mul: { price: 1.2 } } // Update operation
   );
   