function insertZeroBeforeEvenNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        // Check if the current number is even
        if (arr[i] % 2 === 0) {
            // If it is, insert 0 before it
            result.push(0);
        }
        // Add the current number to the result array
        result.push(arr[i]);
    }
    return result;
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6];
const newArr = insertZeroBeforeEvenNumbers(arr);
console.log(newArr); // Output: [1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6]
