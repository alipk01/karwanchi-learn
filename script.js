let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

function showSlides(n) {
  
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex].classList.add("active");
  updateDots(slideIndex);

}
function updateDots(slideIndex) {
  const dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  if (dots.length > 0) {
    dots[slideIndex].classList.add("active");
  }
}
AOS.init({

    duration: 1000, 
    once: false 
 });