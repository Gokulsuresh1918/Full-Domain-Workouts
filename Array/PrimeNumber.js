function isPrime(num) {
    if (num <= 1) {
        return false; // 0 and 1 are not prime numbers
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // Number is divisible by another number, so it's not prime
        }
    }
    return true; // Number is prime
}

// Example usage
const num = 7;
if (isPrime(num)) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}
