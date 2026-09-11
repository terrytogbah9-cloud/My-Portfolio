// Dark Mode Toggle
const toggleBtn = document.getElementById('dark-mode-toggle');
toggleBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
//   Update button icon and text
const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        this.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        icon.className = 'fas fa-moon';
        this.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }

});

// Contact Form Submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

//   Simple validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email address.');
    return;
  }

//   Simulate sending
alert('Thank you, ' + name + '! Your message has been sent (demo).');
this.reset();
});

// Smooth Scrolling for navigation Links (Optional)
document.querySelectorAll('nava[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Console greeting
console.log('Welcome to my portfolio! Feel free to explore and reach out if you have any questions or opportunities.');