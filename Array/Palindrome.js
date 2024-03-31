let str = 'neethu'
let leftIndex = 0
let rightIndex = str.length - 1
while (leftIndex < rightIndex) {
    if (str[leftIndex] != str[rightIndex]) {
        console.log('not a palindrome')
        return
    }
    leftIndex++
    rightIndex--
}
console.log('palindrome');
return