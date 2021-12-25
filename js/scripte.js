
lightGallery(document.querySelector('.gallery .images'));
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

};
var swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    grabeCursor: true,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
          },
      },
  
    // And if we need scrollbar
    
  });

  var swiper = new Swiper(".blogs-slides", {
    // Optional parameters
    loop: true,
    grabeCursor: true,
    spaceBetween: 10,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
          },
      },
  
    // And if we need scrollbar
    
  });



  