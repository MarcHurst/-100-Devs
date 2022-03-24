//--- Easy
//create a variable and assign it a number
let testVar = 42;
//minus 10 from that number
testVar -= 10;
//print that number to the console
console.log(testVar);
//--- Medium
//create a variable that holds a value from the input
let secondVar = document.getElementById("danceDanceRevolution").value;
//add 25 to that number
secondVar += 25;
//alert that number
alert(secondVar);
//--- Hard
//create a variable that holds the h1
let thirdVar = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
thirdVar.addEventListener("click",console.log(testVar+secondVar))