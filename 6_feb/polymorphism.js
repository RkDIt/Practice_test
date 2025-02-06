//Method overriding>>
class Animal {
    speak(){
        console.log("The animal speaks")
    }
}

class Dog extends Animal{
    speak(){
        console.log("The Dog Barks")
    }
}

class Bird extends Animal{
    speak(){
        console.log("The bird Chirps")
    }
}

const animal = new Animal;
const dog =  new Dog;
const bird = new Bird;

dog.speak();
bird.speak();
animal.speak();
