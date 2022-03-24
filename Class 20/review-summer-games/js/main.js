//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
const testFunc = (arr=[1,2,3,4,5,6]) => console.log(arr.reduce((prev, curr) => prev*curr,1));

testFunc();