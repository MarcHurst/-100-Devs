// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let testVar = true;
// alert(testVar);

// Declare a variable, reassign it to your favorite color, and console log the value
let testVar2;
testVar2 = "purple";
console.log(testVar2);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
const funcOne = (num1, num2, num3, num4) => {
    return (num1+num2+num3)/num4
};

funcOne(167, 244, 103, 5);

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
const funcTwo = (num1, num2) => {
    console.log(Math.pow(num1, num2))
}

funcTwo(10,3);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
const funcThree = (str1, bool1) => bool1 ? alert(str1) : console.log(str1);

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
const divis3 = num => num%3 == 0 ? true : false;
const divis5 = num => num%5 == 0 ? true : false;

const funcFour = (num) => {
    for (let i = 1; i <= num; i++) {
        if (divis3(i) && divis5(i)) {
            console.log(`fizzbuzz`);
        } else if (divis3(i)) {
            console.log(`fizz`);
        } else if (divis5(i)) {
            console.log(`buzz`)
        } else {
            console.log(i)
        }
    }
}

funcFour(197)