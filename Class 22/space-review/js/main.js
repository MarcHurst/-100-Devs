//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1,8,7,2,3,9];
let sum = arr.reduce((prevnum, nextnum) => prevnum+nextnum,0);
console.log(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let squaredArray = arr => arr.map(num => num*num)
console.log(squaredArray(arr))

//Create a function that takes string
//Print the reverse of that string to the console
let str = "Codex is the floofiest floof";
const reverseString = str => {
    let newString = "";
    for (let i = str.length-1; i >= 0; i--) {
        newString += str[i];
    };
    console.log(newString);
}

reverseString(str);
//Create a function that takes in a string
//Alert if the string is a palindrome or not
const isPalindrome = str => {
    let palindrome = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length-1-i]) {
            palindrome = false;
        };
    };
    console.log(palindrome);
};

isPalindrome("firetruck");