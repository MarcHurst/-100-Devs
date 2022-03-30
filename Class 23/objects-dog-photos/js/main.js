//Get a dog photo from the dog.ceo api and place the photo in the DOM
window.onload = _ => {
    dogePic();
}

const dogePic = async _ => {
    let resp = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = await resp.json();
    document.getElementById("picZone").src = data.message;
}