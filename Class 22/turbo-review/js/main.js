// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let tmpVar = `Dr. Pepper`;
console.log(tmpVar);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let str2 = "lorem ipsum dolor and something else or possibly multiple other things";

const containsApple = str => str.split(" ")
    .includes("apple");



// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const rpsRando = _ => {
    let num = Math.floor(Math.random()*3)+1;
    return num == 1 ? "rock" :
        num == 2 ? "paper" :
        "scissors";
};
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
const rpsPlay = (choich) => {
    choich = choich.toLowerCase();
    let botPick = rpsRando();
    if (botPick == choich) {
        return `Tie!`;
    } else if ((botPick == `rock` && choich == `paper`) || (botPick == `paper` && choich == `scissors`) || (botPick == `scissors` && choich == `rock`)) {
        return `VICTORY!`;
    } else {
        return `You took an L`;
    };
};


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
const rpsGames = arr => arr.map(choich => rpsPlay(choich));

let gamesChoices = ['rock', 'paper', 'scissors', 'paper', 'rock', 'scissors', rpsRando(), rpsRando()];
console.log(rpsGames(gamesChoices))