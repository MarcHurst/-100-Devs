//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
    constructor(model, colour, capacity) {
        this.model = model
        this.colour = colour
        this.capacity = capacity
        this.powerstate = 'off'
        this.waterLevel = 0
    }
    refillWater = _ => this.waterLevel = 100
    powerButton = _ => {
        if (this.powerstate === 'off') {
            this.powerstate = 'on'
            console.log(`${this.model} Turned on`)
            this.brewCoffee()
        } else {
            this.powerstate = 'off'
        }
    }
    readout = _ => console.log(`Model: ${this.model}\nColour: ${this.colour}\nCapacity: ${this.capacity}\nPowerstate: ${this.powerstate}\nWater Level: ${this.waterLevel}`)
    brewCoffee = _ => {
        while (this.powerstate === 'on') {
            if (this.waterLevel > 0) {
                if (this.waterLevel >= 20) {
                    this.waterLevel -= 20
                    console.log(`Used 20 units of water to make a coffee.`)
                } else {
                    this.waterLevel = 0
                    this.powerstate = 'off'
                    console.log(`Ran out of water making a partial cup of coffee, turning off.`)
                }
            } else {
                console.log("Did not have enough water.  Turning back off.")
                this.powerstate = 'off'
            }
        }
    }
}
    
let machine1 = new EspressoMachine('T-1000', 'Chrome', '2 L')

machine1.readout()
machine1.refillWater()
machine1.readout()
machine1.powerButton()