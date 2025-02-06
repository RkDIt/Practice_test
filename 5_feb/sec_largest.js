const arr = [10,2,6,1,0];

for(let i = 0; i< arr.length; i++){
    let j = i;
    for(j ;j<arr.length; j++){
        if(arr[i]>arr[j]){
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}
let ele = arr.length-2;
console.log("Sorted array ", arr)
console.log(" Second largest element is :", arr[ele]);