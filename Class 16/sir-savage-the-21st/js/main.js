//Create a function that has a loop that prints '21' 21 times to the console and then call that function
const testFunc = () => {
    let count = 1
    do {
        console.log(21)
        count++;
    }
    while (count <= 21) 
}
testFunc();

const testFunc2 = () => document.getElementById("savageSays").innerText = "21 ".repeat(21);
//Bonus can you make it print '21' 21 times to the dom?
