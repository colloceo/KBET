document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login for demonstration purposes
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect to homepage or perform other actions
        window.location.href = 'profile.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});