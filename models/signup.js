// signup.js

document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get user input from the form
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Perform registration logic here (e.g., send a POST request to the server)

        // Redirect to the login page after successful registration
        window.location.href = 'login.html';
    });
});

