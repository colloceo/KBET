document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    alert(`Login attempt with username: ${username}`);

    // Here you would handle the login, send data to the server, etc.
});
