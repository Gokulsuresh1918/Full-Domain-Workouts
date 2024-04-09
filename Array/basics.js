//even number
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i])
    }
}

const arr1= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function evenNumber(arr) {
    return arr.filter(number => number % 2 == 0)
}
console.log(evenNumber(arr));



//odd number./ 
const ar2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function oddNumber(arr) {
    return arr.filter(Number => Number % 2 != 0)
}
console.log(oddNumber(arr));



//unique number
const arr4 = [1, 2, 3, 4, 2, 5, 6, 5, 7]
const unique = [...new Set(arr)]
console.log(unique);


//sum
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = arr.reduce((a, b) => {
    return a + b
})
console.log(sum);



//sort in ascending order
const arrds = [5, 2, 9, 7, 1, 3]
const sorts = arr.sort()
console.log(sort);



//in descending order
const arr6 = [5, 2, 9, 7, 1, 3]
const sort = arr.sort((a, b) => b - a)
console.log(sort);



//reverse
const ar7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const reversed = arr.reverse()
console.log(reversed);
console.log(arr);

const arr87 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const reversed7 = [...arr].reverse()
console.log(reversed);
console.log(arr);



//switch
let days = 6
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
        break
    case 6:
    case 7:
        console.log("Weekend");
        break
    default:
        console.log("Invalid day");
}



//if, else if
const day = 6
if (day >= 1 && day <= 5) {
    console.log("Weekday");
} else if (day == 6 || day == 7) {
    console.log("Weekend");
} else {
    console.log("Invalid day");
}



///find largest using reduce
const ar2r = [5, 7, 3, 9, 1, 8]
const large = arr.reduce((a, b) => Math.max(a, b))
console.log(large);


//find smallest using reduce
const arr47 = [5, 7, 3, 9, 2, 8]
const small = arr.reduce((a, b) => Math.min(a, b))
console.log(small);



deconstuction(object)
const person = { name: "John", age: 20, place: "TVM" }
const { name, age, place } = person
console.log(name);



deconstruction(array)
const arrsd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [one, two, three, ...rest] = arr
console.log(two);


const a = [
    {
        fruit: "apple",
        color: "red"
    },
    {
        fruit: "orange",
        color: "green"
    }
]
//console.log(${ a[0].fruit });