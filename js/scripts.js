document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Form validation logic here
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Form submitted successfully!');
        // Implement actual form submission logic
    } else {
        alert('Please fill in all fields.');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();

    setInterval(() => {
        document.getElementById('date-time').textContent = new Date().toLocaleString();
    }, 1000);
});
