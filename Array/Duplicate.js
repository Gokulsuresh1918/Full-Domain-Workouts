function findDuplicates(arr) {
    let newArray = []
    for(i=0;i<arr.length;i++) {
        for(j=i+1;j<arr.length;j++) {
            if(arr[i] === arr[j] && !newArray.includes(arr[i])) {
                newArray.push(arr[i])
            }
        }
        
    }
    return newArray
}
const array1 = [1,2,3,3,3,4,4,5,5,1,7,8] 
const result = findDuplicates(array1)
console.log(result);