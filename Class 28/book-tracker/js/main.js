//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `http://openlibrary.org/api/books?bibkeys=ISBN:${choice}&format=json&jscmd=details`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let name = data[Object.keys(data)[0]].details.title
        console.log(name);
        document.getElementById("theH3").innerText = name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
};

