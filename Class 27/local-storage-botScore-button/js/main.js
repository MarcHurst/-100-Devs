//Create a button that adds 1 to a botScore stored in localStorage 

const count = _ => {
    if (localStorage.getItem('botscore')) {
        
        localStorage.setItem('botscore', Number(localStorage.getItem('botscore'))+1)
    } else {
        localStorage.setItem('botscore', 1)
    }
}

document.querySelector('img').addEventListener('click', count)