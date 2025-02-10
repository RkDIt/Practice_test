function greet(name,callback){
    console.log("Hello",name)
    callback();//invoke
}
let name = "Ritik";


greet(name ,() => {
    console.log("Good morning")
});
