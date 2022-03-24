// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let testVar;
testVar = "Christmas";
testVar = testVar.toUpperCase();
console.log(testVar);
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let testVar2 = "string!";
console.log(testVar2[testVar2.length-3]);
console.log(testVar2[testVar2.length-2]);
console.log(testVar2[testVar2.length-1]);

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
const testFunc = (num1, num2, num3, num4, num5) => console.log(Math.abs(100-num1-num2-num3-num4-num5));
testFunc(1,2,30,45,50);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
const secondTestFunc = (num1, num2, num3) => {
    let tmp = [num1, num2, num3].sort((a,b) => a-b);
    console.log(tmp[0],tmp[2]);
};

secondTestFunc(1,18,4);
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

const coinFlip = () => {
    let num = Math.ceil(Math.random()*2);
    if (num === 1) {
        return "Heads";
    } else {
        return "Tails";
    }
}
console.log(coinFlip())
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
