//Arrays
let testArr = [1,2,3,4,5];
//Create and array of numbers. Sum all of the numbers. Alert the sum.
let tmpSum = testArr.reduce((acc, c) => acc+c,0);
console.log(tmpSum);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const squaredArr = arr => arr.map(num => num*num);
console.log(squaredArr);
//Create a function that takes string
//Print the reverse of that string to the console
let testString = "Codex is the best cat ever";
const reverseString = str => str.split('').reverse().join('');
console.log(reverseString(testString));
//Create a function that takes in a string
//Alert if the string is a palindrome or not
const isPalindrome = str => str.toLowerCase() === reverseString(str).toLowerCase();
console.log(isPalindrome("racecar"));