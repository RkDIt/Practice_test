let n = 5; //normal 
for (let i = 1; i<=n; i++){
    let s = ' ';
    for(let j = 1; j <= n-i; j++){
        s += " ";
    }
    for(let k = 1; k<= (2*i)-1; k++){
        s += "*";
    }
    console.log(s);
}
for(let i= n-1; i>=1;i--){  //reverse pyramid
   let s = ' ';
    for(let j = 1; j <= n-i; j++){
        s += " ";
    }
    for(let k = 1; k<= (2*i)-1; k++){
        s += "*";
    }
    console.log(s);
}
