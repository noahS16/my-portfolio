const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
let slideIndex = 0;

prevButton.addEventListener('click', () => {
    slideIndex = Math.max(slideIndex - 1, 0);
    carousel.scrollBy({
      left:-250,
      behavior: 'smooth'
    })
});

nextButton.addEventListener('click', () => {
    slideIndex = Math.min(slideIndex + 1, carousel.children.length - 1);
    carousel.scrollBy({
      left: 250,
      behavior: 'smooth'
    })
});