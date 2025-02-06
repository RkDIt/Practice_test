let str = "hello";
let obj1 ={};


for (i=0; i<= str.length-1; i++){
    let chr = str[i];
        
        if(!obj1[chr]){
            obj1[chr]= 0;
        }
            obj1[chr]++;
        
        
    
}
console.log(obj1);