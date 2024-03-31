let arr = [1,2,3,4,7,4,1,9,1]
for(let i=0;i<arr.length-1;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]==arr[j]){
      for(k=j;k<arr.length;k++){
        arr[k]=arr[k+1]
      }
      arr.length--
    }
  }
}
console.log(arr);