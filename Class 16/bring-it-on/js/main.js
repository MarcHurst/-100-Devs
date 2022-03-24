// *Variables*
// Create a variable and console log the value
let var1 = "test";
console.log(var1);
// Create a variable, add 10 to it, and alert the value
let var2 = 42;
var2 += 10;
alert(var2);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
const subFour = (num1, num2, num3, num4) => alert(num1-num2-num3-num4)

// Create a function that divides one number by another and returns the remainder
const divTwo = (num1, num2) => num1%num2;

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
const addTwo = (num1, num2) => {
    if ((num1+num2) > 50) {alert("Jumanji")}
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
const multThree = (num1, num2, num3) {
    if ((num1*num2*num3)%3 == 0) {
        alert("ZEBRA");
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
const strangeFunc = (string1, num1) => {
    for(let i=0;i >= num1;i++) {
        console.log(string1)
    }
}