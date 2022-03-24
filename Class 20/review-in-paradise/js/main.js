// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let foodness;
foodness = "Shepherd's Pie";
// Console logging instead of Alerting.
console.log(foodness);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
console.log(foodness[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
const pointlessMafs = (num1, num2, num3) => console.log(num1/num2*num3);
pointlessMafs(10,2,5)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
const cubeRootIt = (num) => {
    console.log(Math.cbrt(num).toFixed(4));
}
cubeRootIt(9)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
const checkForSummer = (month="June") => {
    let tmp = month.toLowerCase();
    if (month=="june"||month=="july"||month=="august") {
        console.log(`Yay`)
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
const iterations = (num = 45) => {
    for (let i = 1; i < num; i++) {
        if (0 % 5 == 0) {
            // We don't get got.
        } else {
            console.log(i)
        }
        
    }
}