// // Automatic Image Slider
// let slideIndex = 0;
// const slides = document.querySelectorAll('.slide');

// function showSlides() {
//   // Hide all slides
//   slides.forEach((slide) => {
//     slide.style.display = 'none';
//   });

//   // Show the current slide
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = 'block';

//   // Change slide every 2 seconds
//   setTimeout(showSlides, 2000);
// }

// showSlides();

// // Card Image Slider
// const cardSliders = document.querySelectorAll('.card-slider');

// cardSliders.forEach((slider) => {
//   const slides = slider.querySelectorAll('.card-slide');
//   const prevBtn = slider.querySelector('.prev-btn');
//   const nextBtn = slider.querySelector('.next-btn');
//   let currentIndex = 0;

//   // Show the first slide
//   slides[currentIndex].classList.add('active');

//   // Next Button
//   nextBtn.addEventListener('click', () => {
//     slides[currentIndex].classList.remove('active');
//     currentIndex = (currentIndex + 1) % slides.length;
//     slides[currentIndex].classList.add('active');
//   });

//   // Previous Button
//   prevBtn.addEventListener('click', () => {
//     slides[currentIndex].classList.remove('active');
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     slides[currentIndex].classList.add('active');
//   });
// });





// Toggle Hamburger Menu
// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('nav-links');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });

// Automatic Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Show the current slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';

  // Change slide every 2 seconds
  setTimeout(showSlides, 2000);
}

showSlides();

// Card Image Slider
const cardSliders = document.querySelectorAll('.card-slider');

cardSliders.forEach((slider) => {
  const slides = slider.querySelectorAll('.card-slide');
  const prevBtn = slider.querySelector('.prev-btn');
  const nextBtn = slider.querySelector('.next-btn');
  let currentIndex = 0;

  // Show the first slide
  slides[currentIndex].classList.add('active');

  // Next Button
  nextBtn.addEventListener('click', () => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  });

  // Previous Button
  prevBtn.addEventListener('click', () => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
  });
});

// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close Navbar when clicking outside or on a link
document.addEventListener('click', (event) => {
  const isClickInsideNavbar = event.target.closest('.navbar');
  const isClickOnHamburger = event.target.closest('.hamburger');
  const isClickOnNavLink = event.target.closest('.nav-links a');

  if (!isClickInsideNavbar && !isClickOnHamburger) {
    navLinks.classList.remove('active');
  }

  if (isClickOnNavLink) {
    navLinks.classList.remove('active');
  }
});

// Automatic Branch Slider
const branchSliders = document.querySelectorAll('.branch-slider');

branchSliders.forEach((slider) => {
  const slides = slider.querySelectorAll('.branch-slide');
  let currentIndex = 0;

  function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }

  setInterval(showNextSlide, 5000); // Change slide every 5 seconds
});

