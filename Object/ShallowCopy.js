const originalObject = { a: 1, b: 2, c: { d: 3 } };
const shallowCopiedObject = { ...originalObject };

console.log(shallowCopiedObject); // { a: 1, b: 2, c: { d: 3 } }
