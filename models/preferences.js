// preferences.js

document.addEventListener('DOMContentLoaded', function () {
    const preferencesForm = document.getElementById('preferences-form');

    preferencesForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Collect user account preferences data from the form
        const preference1 = document.getElementById('preference1').checked;
        const preference2 = document.getElementById('preference2').checked;

        // Send the preferences to the server
        fetch('/api/update-preferences', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                preference1,
                preference2
                // Add any other preference data to update
            })
        })
        .then(response => response.json())
        .then(data => {
            // Handle the result of updating user preferences
            // For example, show a success message
            
            // Redirect or update the page as needed
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle the error or show an error message
        });
    });
});

