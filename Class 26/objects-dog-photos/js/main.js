//Get a dog photo from the dog.ceo api and place the photo in the DOM
document.getElementById(`getDoge`).addEventListener('click', getFetch);
// document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://dog.ceo/api/breeds/image/random';

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        document.getElementById(`dogePic`).src = data.message;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
};