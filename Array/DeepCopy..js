//Deep copy of array
const originalArray = [1, 2, [3, 4], {a: 5}];
const deepCopy=JSON.parse(JSON.stringify(originalArray))