
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

function updateSlidePosition() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidePosition();
});

// Swipe Support
let startX = 0;
track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

track.addEventListener('touchend', (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) { currentIndex = (currentIndex + 1) % slides.length; updateSlidePosition(); }
  else if (endX - startX > 50) { currentIndex = (currentIndex - 1 + slides.length) % slides.length; updateSlidePosition(); }
});

window.addEventListener('resize', updateSlidePosition);
