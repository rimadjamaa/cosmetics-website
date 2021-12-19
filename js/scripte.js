let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}
document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
}
let searchFrm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchFrm.classList.toggle('active');
};

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchFrm.classList.remove('active');
};
let slides = document.querySelectorAll('.home .slide');
let index = 0;
function next() {
    slides[index].classList.remove('active');
    index = (index +1) % slides.length;
    slides[index].classList.add('active');

}
function perv() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');

}