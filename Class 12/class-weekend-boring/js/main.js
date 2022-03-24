// document.querySelector('#check')
//   .addEventListener('click', check);


const check = () => {
  // const day = document.querySelector('#day').value
  let day = 'tuesday';
  let lowerday = day.toLowerCase()
  let result
  switch(lowerday) {
    case 'monday':
    case 'wednesday':
      result = "Weekday";
      break;
    case 'tuesday':
    case 'thursday':
      result = "Class Day";
      break;
    case 'friday':
    case 'saturday':
    case 'sunday':
      result = "Funday!";
      break;
  }
  //Conditionals go here
//   document.getElementById('placeToSee')
//     .innerHTML = result;

}


console.log(check());