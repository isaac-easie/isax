// Simple form validation and submission (placeholder functionality)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Placeholder: Just log the form data to console (you can integrate actual form submission logic here)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    console.log('Form submitted with the following data:');
    console.log(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);
    
    // Optional: Show a success message
    alert("Your message has been sent successfully!");
    
    // Reset form after submission
    document.getElementById('contactForm').reset();
});
