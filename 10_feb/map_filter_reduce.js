let arr = [1,2,3,4,5]
const mapping = arr.map(x => x*2 )
const new_arr = arr.filter(x => x%2 === 0);
const sum = arr.reduce((x,y )=>{
  return  x + y
})
console.log(mapping) //map
console.log(new_arr)//filter
console.log(sum)//reduce