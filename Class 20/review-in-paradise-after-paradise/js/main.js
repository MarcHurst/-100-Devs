// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
const testFunc = (arr = [1,2,3,198,17,92,63,31,11,14]) => {
    console.log(arr[arr.length]);
    if (arr[0] < arr[arr.length-1]) {
        console.log(`Hi`);
    } else if (arr[0] > arr[arr.length-1]) {
        console.log(`Bye`);
    } else {
        console.log(`We close in an hour`);
    }
}