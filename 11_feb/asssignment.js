const arr = [12, 5, 8, 7, 15, 4, 20, 1];
const arr_even= [];
const arr_odd= [];
const arr_indi = [];

for(let i=0; i<=arr.length-1;i++){
    
    if(i %2 ==0){
            arr_indi.push(arr[i])
        }
    if(arr[i]%2 == 0 ){
        arr_even.push(arr[i])
    }
    else{
        arr_odd.push(arr[i])
    }
}


function sum(arr){
    let total = arr[0]

for(let i= 1; i<=arr.length-1; i++){
    total += arr[i]
}
return total;
}


function product(arr){
    let prod = arr[0];
    
    for(let i = 1; i<=arr.length -1; i++){
        prod  *= arr[i];
    }
    return prod;
}



console.log("product of Even Indices",product(arr_indi));
console.log("Sum of Even numbers: ", sum(arr_even))
console.log("number of odd numbers" ,arr_odd.length)