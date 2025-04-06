const menu = document.querySelector('.menu');
const dropdown = document.querySelector('nav');
const background = document.querySelector('body');

menu.addEventListener('click', ()=>{
    dropdown.classList.toggle('active')
    background.classList.toggle('no-scroll')
});