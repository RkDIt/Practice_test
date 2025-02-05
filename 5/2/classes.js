
class Animal{
    constructor(name){
        this.name = Animal.capital(name);
    }

    speak(){
        console.log(`${this.name} makes noise`)
    }

    static capital(name){
        return name.charAt(0).toUpperCase() + name.substring(1, name.length)
    }
}

const a = new Animal("dog");
const b = new Animal("cat");
a.speak();
b.speak();
 
// console.log(a.capital("smile")); >> cannot access the function capitalize through obj

class Birds{
    #name = " ";
    #flight= " ";
    constructor(name, flight){
        this.#name = name;
        this.#flight = flight;
    }

    def() {
        console.log(`${this.name} ${this.flight} fly`);
    }
    //accessing private properties through getter
    getname(){
        console.log(this.#name);
    }


}

const c= new Birds("Penguin", "Can not");
const d = new Birds("Crow", "Can ");
//access private property>>
d.getname();







