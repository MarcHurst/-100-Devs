//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

window.onload = _ => {
    document.getElementById("goTime").addEventListener("click", getCocktail)
}

cocktailFetch = async drink => {
    let url = `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;
    let resp = await fetch(url);
    let data = await resp.json();
    return data;
};

const getCocktail = async _ => {
    let search = document.getElementById("searchInput").value;
    let dataObj = await cocktailFetch(search);
    console.log(dataObj);
};