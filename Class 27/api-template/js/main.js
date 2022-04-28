const APIKEY = `oMHBp0mvs0TLsdfr48aNUe5yLlYOOJWcFlgadMx6`;
const BASEURL = `https://api.nasa.gov/planetary/`;
//apod?api_key=DEMO_KEY;

//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  const choice = document.querySelector('input').value
  const url = `${BASEURL}apod?api_key=${APIKEY}&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl;
        document.querySelector('h3').innerText = data.explanation;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

