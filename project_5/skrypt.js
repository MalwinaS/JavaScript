const burger = document.querySelector(".burger");
const faBars = document.querySelector(".fa-bars");
const faTimes = document.querySelector(".fa-times");
const nav = document.querySelector("nav ul");


const openBurger = () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    faTimes.classList.toggle('hide');
    faBars.classList.toggle('hide');
}

burger.addEventListener('click', openBurger);