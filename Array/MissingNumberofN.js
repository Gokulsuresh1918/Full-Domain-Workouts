function findMissingNumbers(arr, n) {
    // Step 1: Sort the array
    arr.sort((a, b) => a - b);
   
    // Step 2: Initialize an empty array to hold missing numbers
    let missingNumbers = [];
   
    // Step 3: Iterate through the numbers from 1 to n
    for (let i = 1; i <= n; i++) {
       // Check if the current number exists in the array using includes()
       if (!arr.includes(i)) {
         // If not, add it to the list of missing numbers
         missingNumbers.push(i);
       }
    }
   
    // Step 4: Return the list of missing numbers
    return missingNumbers;
   }
   
   // Example usage
   const arr = [1, 2, 4, 6, 3, 7, 8];
   const n = 8; // Assuming the array should contain numbers from 1 to 8
   const missing = findMissingNumbers(arr, n);
   console.log(missing); // Output: [5]
   