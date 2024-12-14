const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar');
const fa_xmark = document.querySelector('.fa-xmark');
const fa_bars = document.querySelector('.fa-bars');
hamburgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    fa_xmark.classList.toggle('toggleXmarks');
    fa_bars.classList.toggle('fa-barsToggle');
  
});
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.control.prev');
const nextButton = document.querySelector('.control.next');
let currentIndex = 0;
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});
showImage(currentIndex);