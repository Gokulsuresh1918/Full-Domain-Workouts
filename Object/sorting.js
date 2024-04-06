const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'Dave', age: 28 }
];

// Sort by age in ascending order
people.sort((a, b) => a.age - b.age);

console.log(people);
