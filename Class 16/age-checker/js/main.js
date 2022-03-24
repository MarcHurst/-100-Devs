//Create a conditonal that checks their age


//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1

//Take the value from the input

const returnResult = result => document.getElementById("results").innerText = result;

const ageCheck = () => {
    let ageVar = document.getElementById("danceDanceRevolution").value
    if (ageVar < 16) {
        returnResult("You may not drive!")
    } else if (ageVar < 18) {
        returnResult("No hating from the outside the club just because you can't get in.")
    } else if (ageVar < 21) {
        returnResult("You can drink in Canada.")
    } else if (ageVar < 25) {
        returnResult("You can not rent cars affordably.")
    } else if (ageVar < 30) {
        returnResult("No cheap fancy car rentals for you... yet.")
    } else {
        returnResult("Honestly ... there's nothing left to look forward to from here.")
    }
}
//Place the result of the conditional in the paragraph
document.getElementById("checkButton").addEventListener('click',ageCheck)