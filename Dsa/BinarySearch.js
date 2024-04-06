
function binarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

        if (target === arr[middleIndex]) {
            return middleIndex
        } else if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}
const array = [1, 2, 3, 4, 5]
const target = 4
const neww = binarySearch(array, target)
console.log(neww);

//! Recursive Binary Search
function RecursiveBinary(arr, target) {
    return searchBinary(arr, target, 0, arr.length - 1)
}
function searchBinary(arr, target, leftindex, rightindex) {
    if (leftindex > rightindex) {
        return -1
    }
    let middleindex = Math.floor((leftindex + rightindex) / 2)
    if (target == arr[middleindex]) {
        return middleindex
    }
    if (target < arr[middleindex]) {
        return searchBinary(arr, target, leftindex, middleindex - 1)
    } else {
        return searchBinary(arr, target, middleindex + 1, rightindex)

    }
}
// console.log(RecursiveBinary([-5, 2, 4, 6, 10],20));



