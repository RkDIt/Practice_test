let arr = [1,2,4,2,5];
let arr2 = [];

for (let i =0 ; i<= arr.length-1; i++){
    let curr_elem  = arr[i];
    if(!arr2.includes(curr_elem)){
        arr2.push(curr_elem);
    }
}
  console.log(arr2);
  console.log(arr);