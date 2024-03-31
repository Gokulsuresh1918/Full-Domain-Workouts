function countLetters(str) {
    // Step 1: Initialize an empty object
    let letterCounts = {};
   
    // Step 2: Iterate through the string
    for (let i = 0; i < str.length; i++) {
       let letter = str[i];
       // Check if the letter is already in the hash table
       if (letterCounts[letter]) {
         // If it is, increment its count
         letterCounts[letter]++;
       } else {
         // If it's not, add it to the hash table with a count of 1
         letterCounts[letter] = 1;
       }
    }
   
    // Step 3: Return the hash table
    return letterCounts;
   }
   
   // Example usage
   const text = "Hello, World !";
   const counts = countLetters(text);
   console.log(counts);
   