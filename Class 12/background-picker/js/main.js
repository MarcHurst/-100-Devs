document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('randoButton').onclick = partyRando


function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function partyRando() {
  document.querySelector('body').style.backgroundColor = getRandomColour();
  document.querySelector('body').style.color = getRandomColour();
}

const getRandomColour = () => {
  let red = Math.floor(Math.random()*255);
  let green = Math.random()*255;
  let blue = Math.random()*255;
  return `rgba(${red},${green},${blue})`;
}

