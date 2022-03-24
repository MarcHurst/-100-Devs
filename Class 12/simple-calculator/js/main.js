let total = 0

let calcs = {
  jumanji: 3,
  add9: 9,
  sub2: -2,
}

const newNum = () => {
  console.log(`newNum Called`);
  let posNeg = Math.random() > 0.5 ? -1 : 1;
  let value = Math.round(Math.random()*20)
  value = value * posNeg;
  console.log(posNeg)
  return value;
}

const reflect = () => {
  console.log("Reflect Called");
  document.getElementById("dominosPizza").innerHTML = calcs.jumanji < 0 ? calcs.jumanji : "+"+calcs.jumanji;
  document.getElementById("zebra").innerHTML = calcs.add9 < 0 ? calcs.add9 : "+"+calcs.add9;
  document.getElementById("cantThinkOfAnything").innerHTML = calcs.sub2 < 0 ? calcs.sub2 : "+"+calcs.sub2;
}

const scramble = () => {
  console.log(`Scramble Called`);
  calcs.jumanji = newNum();
  calcs.add9 = newNum();
  calcs.sub2 = newNum();
  reflect();
}

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#rando').addEventListener('click', scramble)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + calcs.jumanji;
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + calcs.add9;
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total + calcs.sub2;
  document.querySelector('#placeToPutResult').innerHTML = total
}




