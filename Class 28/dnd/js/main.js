//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let ul = document.getElementById("subclassUL");
        ul.innerHTML = "";
        let subclassArr = data.subclasses;
        subclassArr.forEach( subclass => document.getElementById("subclassUL")
            .insertAdjacentHTML("beforeend", `<li>${subclass.name}</li>`)
        );
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
};

