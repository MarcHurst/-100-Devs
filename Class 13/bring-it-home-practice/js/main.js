// *Variables*
// Create a variable and console log the value
let tmp = 10;
console.log(tmp);
// Create a variable, add 10 to it, and alert the value
let testvar = 5;
testvar += 10;
alert(testvar);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
const testFunc = (num1, num2, num3, num4) => alert(num1-num2-num3-num4);
// Create a function that divides one number by another and returns the remainder
const getMod = (dividend, divisor) => dividend % divisor;
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
const doTheThing = (num1, num2) => {
    if ((num1+num2) > 50) {
        alert("Jumanji");
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
const unoMas = (num1, num2, num3) => {
    if (((num1*num2*num3) % 3) = 0) {
        alert("ZEBRA");
    }
}