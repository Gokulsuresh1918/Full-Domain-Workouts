//!(1) starting of dsa and now  we are goinh to start finding sum of two nuumbwrs 


function twoNumSum(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                console.log(arr[i], arr[j]);
            }
        }
    }
    console.log("number elle");
}
// twoNumSum(arr = [1, 2, 6, 7, 4, 9], target = 10)

// complexity is O(n2)
// here loop works through n timesa and ther is a  nested loop so thats why wwe use n*n
// space complexity is O(1)
// here there is no need of new space thats why O(1)






// lets look another approach 
function twoNumSum(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        let check = arr[i]
        let match = target - check
    }
    console.log("number elle");
}
// twoNumSum(arr = [1, 2, 6, 7, 4, 9], target = 10)



//!(2)   adding requried element to the last
function demo(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j >= i; j--) {

            if (arr[i] == target) {
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}
let arr = [6, 6, 8, 6]
// demo(arr, 6)
// console.log(arr);
// here we are converting all target value to the end of this array




//Flatened a jagged array
const jaggedArray = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
const flattenedArray = jaggedArray.flat();

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]







