function removePropertiesStartingWithVowels(obj) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let key in obj) {
        if (vowels.includes(key[0].toLowerCase())) {
            delete obj[key];
        }
    }
}

// Example usage
const myObject = {
    apple: 'fruit',
    banana: 'fruit',
    zebra: 'animal'
};

console.log("Before removal:", myObject);
removePropertiesStartingWithVowels(myObject);
console.log("After removal:", myObject);
