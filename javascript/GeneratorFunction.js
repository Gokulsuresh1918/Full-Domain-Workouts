function* numberGenerator() {
    let number = 1;
    while (true) {
        yield number++;
    }
}

// Create a generator object
const numbers = numberGenerator();

// Use the generator to get numbers
console.log(numbers.next().value); // 1
console.log(numbers.next().value); // 2
console.log(numbers.next().value); // 3
// ... and so on
