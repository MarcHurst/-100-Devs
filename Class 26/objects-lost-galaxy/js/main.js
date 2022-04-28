//Create a dog object that has four properties and three methods

const pizza = {
    toppings: ["Pepperoni", "Green Olives", "Pineapple"],
    cheese: "Normal",
    sauce: {
        type: "marinara",
        amount: "Standard",
    },
    bakeTime: "standard",
    getCheesetype: _ => console.log(`Please add ${pizza.cheese} cheese to my pizza`),
    addTopping: topping => pizza.toppings.push(topping),
    getToppings: _ => console.log(`The pizza should have ${pizza.toppings.join(", ")}`),
}

pizza.getToppings()