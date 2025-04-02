// Slideshow 1
var slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) slideIndex1 = 1;
  if (n < 1) slideIndex1 = slides.length;

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (var j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(" active", "");
  }

  slides[slideIndex1-1].style.display = "flex";
  dots[slideIndex1-1].className += " active";
}

// Slideshow 2
var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function showSlides2(n) {
  var slides = document.getElementsByClassName("mySlides2");
  
  if (n > slides.length) slideIndex2 = 1;
  if (n < 1) slideIndex2 = slides.length;

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex2-1].style.display = "flex";
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  showSlides1(1);
  showSlides2(1);
  
  // Auto-advance slideshows
  setInterval(function() {
    plusSlides1(1);
  }, 5000);
  
  setInterval(function() {
    plusSlides2(1);
  }, 7000);
  
  // Other event listeners...
});