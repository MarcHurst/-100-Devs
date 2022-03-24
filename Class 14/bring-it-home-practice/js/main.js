// *Variables*
// Create a variable and console log the value
let test1 = "Codex";
console.log(test1);
// Create a variable, add 10 to it, and alert the value
let var2 = 10;
var2 +=  10;
alert(var2);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
const subFour = (num1 = 1, num2 = 2, num3 = 3, num4 = 4) => alert(num1, num2, num3, num4);
// Create a function that divides one number by another and returns the remainder
const getRemainder = (num1 = 1, num2 = 2) => num1%num2;
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
const jumanjiAdd = (num1 = 1, num2 = 2) => {
    if ((num1+num2) > 50) {
        alert("Jumanji");
    };
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
const multThree = (num1 = 1, num2 = 2, num3 = 3) => {
    if ((num1*num2*num3)%3==0) {
        alert(`Zebra`);
    }
}