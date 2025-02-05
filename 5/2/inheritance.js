class Vehicle{
    constructor(Model,tyres){
        this.model = Model;
        this.tyres = tyres;
    }
}

class  Cars extends Vehicle{
    
    constructor(Model,tyres,turbo){
        super(Model,tyres);
        this.turbo = turbo;
    }

}
class  Bikes extends Vehicle{
    constructor(Model,tyres,type){
        super(Model, tyres);
        this.type = type;
        
    }
}
class  Truck extends Vehicle{
    constructor(Model,tyres,loaded){
        super(Model, tyres);
        this.loaded = loaded;
    }
}

const car1 = new Cars("Audi", 4,"yes");
const bike1 = new Bikes("Honda", 2, "Commercial")
console.log(car1.turbo);
console.log(bike1.type);



