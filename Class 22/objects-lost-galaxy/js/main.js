//Create a mouse object that has four properties and three methods
let mouse = {
    breed: "Fancy",
    earRadius: 17,
    numberOfPaws: 4,
    colour: "grey",
    getBreed: () => mouse.breed,
    getPaws: _ => mouse.numberOfPaws,
    describeIt: _ => `The mouse is a ${mouse.colour} ${mouse.breed} mouse with ${mouse.numberOfPaws} paws and ${mouse.earRadius*2} cm wide ears on its cute head`
};

const MakeCar = (carMake, carModel, carColour, numOfDoors) => {
    this.make = carMake;
    this.model = carModel;
    this.colour = carColour;
    this.doors = numOfDoors;
}

console.log(mouse.breed)
console.log(mouse.getBreed())
console.log(mouse.describeIt())
