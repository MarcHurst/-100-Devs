/*
class Animal{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}

class Degu extends Animal{
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    get color() {
        return this.color
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }    
}
class Cat extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} meows`)
    }    
}

let simba = new Dog('Simba','Shepard')
let machi = new Dog('The Machine','Pitbull')
let salem = new Cat('Salem', 'American Shorthair')

let farm = [simba,machi,salem]

for( a of farm ){
    a.speak()
}

*/

class Animal{
    constructor(name, species){
        this._name = name
    }
    get name() {
        return this._name
    }
    speak() {
        console.log(`${this._name} makes a sound`);
    } 
}

class Cat extends Animal{
    constructor(name, breed){
        super(name, "Cat")
        this._breed = breed
    }
    get breed() {
        return this._breed
    }
    speak = _ => {
        super.speak()
        console.log(`${this.name} meows`)
    }

}

class Dog extends Animal{
    constructor(name, breed){
        super(name, "Dog")
        this._breed = breed
    }

    get breed() {
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }
}

let codex = new Cat("Codex", "Floof", 4)
// codex.speak()
let doctor = new Cat("The Doctor", "Ferret Face", 3)
let cheerios = new Cat("Cheerios", "Noodle Tiger", 4)
let bredroomCats = [codex, doctor, cheerios] 

for (cat of bredroomCats) {
    cat.speak()
}