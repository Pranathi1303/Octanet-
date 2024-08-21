// Contact Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received. We'll contact you soon at ${email}.`);
        // Clear form fields
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
