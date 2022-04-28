//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

const mistyCheats = monArray => monArray.reverse()

console.log(mistyCheats(["Spiritomb", "Giratina", "Alakazam"]))

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

const squareIt = num => num*num;

const cubeIt = num => num*num*num;

const isSumASquaresGreaterThanSumBCubes = (a=[1,2,3,4,5], b=[1,2,3]) => {
    let aSum = a.reduce((sum,num) => sum+squareIt(num));
    let bSum = b.reduce((sum,num) => sum+cubeIt(num));
    return aSum > bSum;
};
console.log(isSumASquaresGreaterThanSumBCubes())

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
const indexedPrimeFactors = arr => {
    let isMultiple = [];
    arr.forEach((num, i) => {
        if (num%i == 0) {
            isMultiple.push(num);
        };
    });
    return isMultiple;
};

console.log(indexedPrimeFactors([0,1,2,3,4,5]))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
const sumArray = (arr = [1, "2", 3, "4", 5]) => arr.reduce((sum,num) => sum+Number(num));

console.log(sumArray())