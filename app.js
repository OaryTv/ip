const box = document.querySelector('.box');
const txt = document.querySelector('.txt');
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    fetch('jsonplaceholder.typicode.com/posts/1')
    .then(reponse => {
        console.log(reponse);
        return reponse.json();
    })


})