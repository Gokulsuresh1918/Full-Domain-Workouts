const arr = [1, 2, 3, 2, 1, 4, 5, 5, 6];
const uniqueItems = [...new Set(arr)];
console.log(uniqueItems); // Output: [1, 2, 3, 4, 5, 6]
