const slides = document.querySelectorAll('.slider .text-wrapper');
const circles = document.querySelectorAll('.circle');

let i = 0;

function nextSlide() {
  slides[i].className = 'text-wrapper';
  circles[i].className = 'circle';

  i = (i + 1) % slides.length;

  slides[i].className = 'text-wrapper showing';
  circles[i].className = 'circle showing';
}

let slideInterval = setInterval(nextSlide, 3000);

