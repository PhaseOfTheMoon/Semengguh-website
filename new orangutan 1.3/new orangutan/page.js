// page.js

// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginForm')?.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent actual form submission
  
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
  
      // Simple client-side validation
      if (!username.match(/^[A-Za-z\s]+$/) || !password.match(/^[A-Za-z\s]+$/)) {
        alert("Only alphabetical characters allowed in username and password.");
        return;
      }
  
      // Simulated login
      alert("Login attempted for username: " + username + "\n(You can link this to an API or server in real use.)");
  
      // Optional redirect
      // window.location.href = "homepage.html";
    });
  
    // Screenshot blocking
    document.addEventListener('keyup', (e) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        document.body.style.filter = 'blur(10px)';
        alert('Screenshots are disabled!');
        setTimeout(() => {
          document.body.style.filter = 'none';
        }, 1500);
      }
    });
  
    // Print blocking (Ctrl+P)
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        e.stopImmediatePropagation();
        alert('Printing is disabled on this site.');
      }
    });
  });
  
// slideshow 1 for index

let slideIndex = 1;

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Show current slide
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].classList.add("active");
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Initial display
window.onload = function () {
  showSlides(slideIndex);
};