//Write your pseduo code first! 
// Event Listener
   
// get the value
const run = () => {
    console.log("BUTTON")
    let value = document.getElementById(`textInput`).value
    let fair = (value*9/5)+32;
    let cell = (value-32)*5/9;
    alert(`${value} in Celsius would be ${fair}°, while ${value} in Fahrenheit would be ${cell}°`);
}
// do the math

// give the value back
document.getElementById("yell").addEventListener('click', run);