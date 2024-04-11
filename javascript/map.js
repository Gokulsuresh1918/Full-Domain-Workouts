const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//Example: Capitalizing Strings in an Array
const fruits = ['apple', 'banana', 'cherry'];
const capitalizedFruits = fruits.map(fruit => fruit.charAt(0).toUpperCase() + fruit.slice(1));
console.log(capitalizedFruits); // Output: ['Apple', 'Banana', 'Cherry']

//Example: Extracting Data from Objects in an Array
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
const userNames = users.map(user => user.name);
console.log(userNames); // Output: ['Alice', 'Bob', 'Charlie']
