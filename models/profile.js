// profile.js

document.addEventListener('DOMContentLoaded', function () {
    const profileForm = document.getElementById('profile-form');

    profileForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Collect user profile data from the form
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Send an AJAX request to update the user's profile
        fetch('/api/update-profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
                // Add any other profile data to update
            })
        })
        .then(response => response.json())
        .then(data => {
            // Handle the result of the profile update
            // For example, show a success message
            
            // Redirect or update the page as needed
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle the error or show an error message
        });
    });
});

