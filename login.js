// login.js

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get user input from the form
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Perform login logic here (e.g., send a POST request to the server)

        // Redirect to the user's account page after successful login
        window.location.href = 'account.html';
    });
});

