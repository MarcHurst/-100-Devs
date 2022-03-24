//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = [
    "Mighty Morphin Power Rangers",
    "Duck Tales",
    "Chip and Dale: Rescue Rangers"
];

tvShows.forEach(v => console.log(v));

//Create and array of numbers
let numArr = [1,7,2,3,9,4]
//Return a new array of numbers that includes every even number from the previous Arrays
let newArr = numArr.filter(v => v%2==0)
console.log(numArr, newArr)
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
const arrFunc = (arr = [1,2,3,4,5,6,2]) => {
    arr.sort((a,b) => a-b);
    console.log(arr);
    console.log(arr[1]);
    console.log(arr[arr.length - 2]) // Doing console.log instead of alerts for Node.
}
arrFunc()