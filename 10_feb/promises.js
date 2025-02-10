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

//2
function simplePromise(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Hello Promise")
        },5000) 
    })
}

simplePromise().then((message) => {
    console.log(message)
})

function checkNumber(number){
    return new Promise((resolve,reject) => {
        if (number >= 10){
            resolve("The number is valid")
        }
        else {
            reject("The number is too small")
        }
    })
}

checkNumber(9)
.then((result)=>{
    console.log(result)
})
.catch((reject)=>{
    console.log(reject)
})



// //using this
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    userDataCall(callback) {
        setTimeout(() => {
            callback(null, { name: this.name, age: this.age });
        }, 1000);
    }

    userPromise() {
        return new Promise((resolve, reject) => {
            this.userDataCall((error, userData) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(userData);
                }
            });
        });
    }
}

const userInstance = new User("Ritik", 24);

userInstance.userPromise()
    .then((result) => {
        console.log("Data Fetched", result);
    })
    .catch((error) => {
        console.log("Error Encountered", error);
    });

//promise with callback
function userDataCall(callback){
    setTimeout(()=>{
        const user = {name: "Ritik", age :24}
        callback(null,user);
    },1000)
}

function userPromise(){
    return new Promise((resolve,reject)=>{
        userDataCall((error,userData)=>{
            if(error){
                reject(error)
            }
            else{
                resolve(userData)
            }
        })
    })
}

userPromise()
.then((result)=>
console.log("Data Fetched",result))
.catch((error)=>{
    console.log("Error Encountered")})

//