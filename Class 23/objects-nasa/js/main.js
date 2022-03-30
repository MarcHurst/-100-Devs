//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
window.onload = _ => {
    document.getElementById(`goTime`).addEventListener('click', fetchPic);
}

const fetchPic = async _ => {
    let picObj = await getPic();
    let picZone = document.getElementById("picZone");
    picZone.src = picObj.hdurl;
    picZone.alt = picObj.alt;
}

const getPic = async () => {
    let resp = await fetch("https://api.nasa.gov/planetary/apod?api_key=oMHBp0mvs0TLsdfr48aNUe5yLlYOOJWcFlgadMx6");
    console.log(resp);
    let data = await resp.json();
    console.log(data);
    return {
        hdurl: data.hdurl,
        alt: data.explanation
    };
};