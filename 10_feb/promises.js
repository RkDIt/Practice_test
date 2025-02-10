function promise_fn(success){
    return new Promise((resolve,reject) =>{
        if(success){
            resolve("It was successful")
        }
        else{
            reject("Failed")
        }
    })
}

promise_fn(false)
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error)
})