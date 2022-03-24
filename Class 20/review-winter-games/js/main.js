//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
const testFunc = (arr=[1,2,3,4,5]) => {
    let tmp = []
    arr.forEach(num => i%2==0 ? tmp.push(num) : console.log(`${i} is odd`))
    return tmp;
}
console.log(testFunc);