document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = "Thank you for your message!";
    this.reset();
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Form elements slide-in animation
const formElements = document.querySelectorAll('form input, form textarea');

window.addEventListener('load', () => {
    formElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 200); // Delays each element by 200ms for a staggered effect
    });
});

// Shake button on invalid form submission
const submitButton = document.querySelector('button');

document.getElementById('contactForm').addEventListener('submit', (event) => {
    const isValid = event.target.checkValidity();
    if (!isValid) {
        submitButton.classList.add('invalid');
        setTimeout(() => {
            submitButton.classList.remove('invalid');
        }, 400);
        event.preventDefault(); // Prevent form submission if invalid
    }
});

