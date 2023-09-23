// feedback.js

document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedback-form');

    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Collect user feedback data from the form
        const feedback = document.getElementById('feedback-text').value;

        // Send the feedback to the server
        fetch('/api/submit-feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                feedback
            })
        })
        .then(response => response.json())
        .then(data => {
            // Handle the result of submitting feedback
            // For example, show a thank-you message
            
            // Clear the feedback input field
            document.getElementById('feedback-text').value = '';
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle the error or show an error message
        });
    });
});

