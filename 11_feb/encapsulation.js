class Car{
    #a = "Car"; //private 
    constructor(x){
        
    this.x = x ;
    }
    
    name(){
        console.log(this.#a, this.x)
    }
    static run(x){  
        console.log(` ${x} Engine started`)
    }
}

const c1 = new Car("bmw");

c1.name()
Car.run("Bmw") //encapsulated
