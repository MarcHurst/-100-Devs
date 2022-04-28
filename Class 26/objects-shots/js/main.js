//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getchaDrankOn)

function getchaDrankOn(){
  const choice = document.querySelector('input').value
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let drink = data.drinks[0];

        document.getElementById("drinkName").innerText = drink.strDrink;
        document.getElementById("drinkPic").src = drink.strDrinkThumb;
        document.getElementById("drinkStructs").innerText = drink.strInstructions;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}