//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this.name = name
    }
    speak = _ => console.log(`${this.name} makes a sound`)
}

class Cat extends Animal{
    constructor(name, breed, legs) {
        super(name)
        this.breed = breed
        this.legs = legs
        this.meow = _ => console.log(`${this.name} does an Adorable Meow`)
    }
}

let codex = new Cat('Codex', 'Floof', 4);
console.log(codex)
codex.meow()
codex.speak()