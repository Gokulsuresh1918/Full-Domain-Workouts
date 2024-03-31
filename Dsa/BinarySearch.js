

function binarySearch(arr,target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)

        if(target === arr[middleIndex]) {
            return middleIndex
        } else if(target <arr[middleIndex]) {
           rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}
const array = [1,2,3,4,5]
const target = 4
const neww = binarySearch(array,target)
console.log(neww);