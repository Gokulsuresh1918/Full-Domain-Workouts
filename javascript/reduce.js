const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0 is the initial value

console.log(sum); // Output: 15







//Example: Counting Elements in an Array

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];

const fruitCounts = fruits.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});

console.log(fruitCounts);
// Output: { apple: 2, banana: 3, orange: 1 }











//Example: Flattening an Array of Arrays


const arrays = [[1, 2, 3], [4, 5], [6]];

const flattenedArray = arrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
