//Create a constructor with 4 properties and 3 methods
function Pizza(dataObj) {
    const {toppings, sauce, cheese, crust} = dataObj;
    this.toppings = toppings;
    this.sauce = sauce;
    this.cheese = cheese;
    this.crust = crust;
    this.listToppings = _ => this.toppings.join(", ");
    this.addTopping = top => {
        if (!this.toppings.includes(top)) {
            this.toppings.push(top);
        };
    };
    this.cheesifyMe = _ => this.toppings = this.toppings.map( _ => "Extra Cheese")
    
};

let codexsPizza = new Pizza({toppings: ["Pepperoni", "Pineapple", "Green Olives"], sauce: "Normal", cheese: "Extra", crust: "Thick"})

console.log(codexsPizza);