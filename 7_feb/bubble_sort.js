let arr = [1,9,10,6,5,0,10,2,3,50,-10]


console.log(arr.length-1)

for(let i=1; i<=arr.length-1;  i++){
    for(let j = 0; j<=arr.length -i ; j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr)