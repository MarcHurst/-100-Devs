//Create a function that grabs the number of snacks from the input and tells you to stop that many times
const snackCheck = snackCount => document.getElementById("stops").innerText = "stop! ".repeat(snackCount)

const testFunc = () => snackCheck(parseInt(document.getElementById("inputField").value))

document.getElementById("help")
    .addEventListener("click",testFunc)