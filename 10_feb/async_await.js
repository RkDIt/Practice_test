function fetchUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const user = {Name:"Ritik",Age: 24}
            resolve(user)
        },1000)
    })
}

function validate(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(user.Age> 18){
                resolve("Valid")
            }
            else{
                reject("User is underage")
            }
        },1000)
    })
}

function createProfile(user){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`Profile Created for ${user.Name}`)
        },1000)
    })
}

function emailConfirmation(user){

    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`Confirmation Email sent to ${user.Name}`)
        },1000)
    })
}



async function userreg(){
    try{
    const userdetail =  await fetchUser()
    console.log("User Details Fetched ",userdetail)
    
    const uservalid = await validate(userdetail)
    console.log("User Age is",uservalid)
    
    const add = await createProfile(userdetail)
    console.log("User:",add)
    
    const confir = await emailConfirmation(userdetail)
    console.log(confir)
        
    }
    
    catch(error){
        console.log(error)
    }
}



userreg();
