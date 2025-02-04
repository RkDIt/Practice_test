let arr = [1,2,4,2,5];
let j = arr.length-1;
for(let i = 0; i<=arr.length; i++){
    while(i>  j){
        for(j=arr.length-1; j=i; j--){
            if(arr[i] === arr[j]){
                arr[j].shift();
                console.log(arr);
            }
        }
    }
}
console.log(arr);