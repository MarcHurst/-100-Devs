//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
const arrayFunc = num => {
    let testArr = [];
    for (let i = 1; i <= num; i++) {
        testArr.push(i);
    };
    return testArr;
}

let tempvar = arrayFunc(17);

console.log(tempvar);