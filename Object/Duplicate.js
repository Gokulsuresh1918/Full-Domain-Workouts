function findDuplicates(arr) {
    const uniqueSet = new Set();
    const duplicates = {};
   
    for (const item of arr) {
       if (uniqueSet.has(item)) {
         // If the item is already in the set, it's a duplicate
         duplicates[item] = (duplicates[item] || 0) + 1;
       } else {
         // If the item is not in the set, add it
         uniqueSet.add(item);
       }
    }
   
    // Filter out the items that are not duplicates
    const duplicateItems = Object.keys(duplicates).filter(key => duplicates[key] > 1);
   
    return duplicateItems;
   }
   
   // Example usage
   const arr = [1, 2, 3, 2, 1, 4, 5, 5, 6];
   const duplicates = findDuplicates(arr);
   console.log(duplicates); // Output: [1, 2, 5]
   