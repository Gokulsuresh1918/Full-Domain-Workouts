const num = {
    a: 1,
    b: 2
}
let sum = 0
for (const x in num) {
    sum = sum + num[x]
}
console.log(sum);