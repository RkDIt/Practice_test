const person = {
    
    x : 10,
    y : 20

}
const p1 = Object.create(person); //creating an object

person.__proto__.Class = 10;
p1.name = "Ritik";

console.log(p1);
p1.__proto__.x = 30;
console.log(p1.__proto__);
console.log(person)



