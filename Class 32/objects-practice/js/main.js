// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
    // class Contractor{
    //     constructor(name,role){
    //         this._name = name
    //         this._role = role
    //     }
    //     get name(){
    //         return this._name
    //     }
    //     get role(){
    //         return this._role
    //     }
    //     sayHello(){
    //         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
    //     }
    // }
    // class Front extends Contractor{
    //     constructor(name,role,tech){
    //         super(name,role)
    //         this._tech = tech
    //     }
    //     get tech(){
    //         return this._tech
    //     }
    //     sayHello(){
    //         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    //     }
    // }
    // class Back extends Contractor{
    //     constructor(name,role,tech){
    //         super(name,role)
    //         this._tech = tech
    //     }
    //     get tech(){
    //         return this._tech
    //     }
    //     sayHello(){
    //         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    //     }
    // }
    // let bob = new Contractor('Bob','Front-end')
    // let simba = new Front('Simba','Front-end','React')
    // let machi = new Back('The Machine','Back-end','Node')

    // let agency = [bob,simba,machi]

    // for(person of agency){
    //     person.sayHello()
    // }

class Contractor{
    constructor(name, role, rate) {
        this._name = name
        this._role = role
        this._rate = rate
    }
    get name() {
        return this._name
    }

    get role(){
        return this._role
    }

    get rate(){
        return this._rate
    }

    get tech(){
        return this._tech
    }
}

class FrontEnd extends Contractor{
    constructor(name, rate, tech) {
        super(name, 'Frontend', rate)
        this._tech = tech
    }
    get name(){
        return this._name
    }
    get rate(){
        return this._rate
    }
    get tech(){
        return this._tech
    }
}

class BackEnd extends Contractor{
    constructor(name, rate, tech, tribute) {
        super(name, 'Backend', rate)
        this._tech = tech
        this._tribute = tribute
    }
    get tribute(){
        return this._tribute
    }
}

let test = new BackEnd('Codex', 97, 'Wobbles', 'Cookies')
console.log(test.tribute)