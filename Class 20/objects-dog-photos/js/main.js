// //Get a dog photo from the dog.ceo api and place the photo in the DOM
const getDoge = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const json = await res.json();
    document.getElementById('dogeImg').src = json.message;
};

getDoge();