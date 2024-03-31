const originalArray = [1, 2, [3, 4], { a: 5 }];
const shallowCopiedArray = [...originalArray];

console.log(shallowCopiedArray); // [1, 2, [3, 4], { a: 5 }]
