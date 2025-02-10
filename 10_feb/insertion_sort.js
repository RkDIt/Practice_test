const arr = [2,8,5,3,9,4,1,20];
for(let i=0; i<=arr.length-1; i++){
    let j = i ;
    while(j>0&& arr[j-1]>arr[j]){
        let temp = arr[j-1]
        arr[j-1]=arr[j]
        arr[j] = temp ;
        j--;
    }
}
console.log(arr)