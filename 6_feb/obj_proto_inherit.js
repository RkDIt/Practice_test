
//constructor
function Car(name){
    this.name = name;
}

//Car constructor property
Car.prototype.get_name = function(){
   console.log(this.name + "Speed = 150km/hr");
}
console.log(Car.prototype)


const Car1 = new Car("Lexus");


Car1.get_name()
//access prototype of instance
console.log(Car1.__proto__)




