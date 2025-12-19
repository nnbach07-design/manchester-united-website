// Image Gallery
const images = document.querySelectorAll(".gallery img");
images.forEach(img => {
  img.addEventListener("click", () => {
    img.classList.toggle("active");
  });
});

// Contact Form Validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message!");
  });
}
