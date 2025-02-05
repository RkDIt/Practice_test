let str ="listed";
let str2="silent";



function anag(){
    if(str.length !== str2.length){
        return false;
    }
    
    for(let i=0;i<=str.length-1;i++){
            let chr = str[i];
            
            if(!str2.includes(chr)){
                return false ;
                
            }  
        }

    
    return true;
}

let result = anag();

console.log(result ? "Its anagram" :" its not");