// *Variables*
// Declare a variable, assign it a value, and alert the value
let num1 = 10
alert(num1)
// Create a variable, divide it by 10, and console log the value
let num2 = 30
num2 /= 10
console.log(num2);
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
const multThree = (num1, num2, num3) => alert(num1*num2*num3);

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
const twoAndTwo = (num1, num2, num3, num4) => console.log(num1+num2-num3-num4);
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
const conditional1 = (num1, num2, num3) => {
    if ((100+num1-num2/num3) > 25) {
        console.log("WE HAVE A WINNNA")
    }
}
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
const weekdayFunc = day => {
    day = day.toLowerCase()
    switch (day) {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            alert("Week Day");
            break;
        case "saturday":
        case "sunday":
            alert("Weekend")
            break;
        case "":
            alert("Try again!")
            break;
        default:
            break;
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
const countByThree = num1 => {
    let count = 1;
    do {
        console.log(count)
        count += 3
    } while (count <= num1);
}