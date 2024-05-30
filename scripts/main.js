// Add any interactive JavaScript for the index.html page here.
// This script is included at the end of the body tag in index.html.

// Redirect to the login page when the "Join Now" button is clicked
document.getElementById('join-now').addEventListener('click', function() {
    window.location.href = 'login.html';
});