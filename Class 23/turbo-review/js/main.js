// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let testString = "Codex is fluffy!";
let testString2 = "Codex is fluffy?";

const isQuestion = str => str[str.length-1] === "?";

console.log(isQuestion(testString))
console.log(isQuestion(testString2))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let testStr3 = "Hi, I'm Marc and I'm a jr. dev.  My entire journey in life has led me to become a jr. dev";

let srString = testStr3.replaceAll('jr. dev','software developer');
console.log(srString);
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const getRPS = _ => {
    let num = Math.floor(Math.random()*3)+1
    return num === 1 ? "rock" :
        num === 2 ? "paper" :
        "scissors"
};
console.log(getRPS())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
const playRPS = choich => {
    let compuChoice = getRPS()
    choich = choich.toLowerCase()
    if (compuChoice === choich) {
        return "Tie";
    } else if ((choich == "rock" && compuChoice == "paper") || (choich == "paper" && compuChoice == "scissors") || (choich == "scissors" && compuChoice == "rock")) {
        return "Failure";
    } else {return "A winner is you!"};
};

console.log(playRPS("rock"));
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
let playRPSTimes = arr => arr.map(choich => console.log(playRPS(choich)));

let choichArray = ["rock", "paper", "scissors", getRPS(), getRPS(), getRPS(), getRPS(), getRPS(), getRPS(), getRPS(), getRPS(), getRPS(), getRPS(), getRPS(), getRPS()];

playRPSTimes(choichArray);