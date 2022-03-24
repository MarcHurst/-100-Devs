//Write your pseduo code first! 

// addEventListener()

const clicked = () => {
    console.log("CLICKED!")
    let input = document.getElementById("inputField").value;
    console.log(input);
    // 32°F − 32) × 5/9 = 0°C
    let realTemperature = (input - 32)*5/9;
    console.log(realTemperature)
    document.getElementById("resultZone").innerHTML = realTemperature;
}


document.getElementById("submitButton").addEventListener('click', clicked);