// chat.js

document.addEventListener('DOMContentLoaded', function () {
    const chatForm = document.getElementById('chat-form');
    const chatMessages = document.getElementById('chat-messages');

    // Handle sending chat messages
    chatForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const message = document.getElementById('chat-message').value;

        // Send the chat message to the server
        fetch('/api/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message
            })
        })
        .then(response => response.json())
        .then(data => {
            // Handle the result of sending the chat message
            // For example, display the sent message in the chat window
            
            // Clear the message input field
            document.getElementById('chat-message').value = '';
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle the error or show an error message
        });
    });

    // Periodically check for new chat messages and display them
    setInterval(() => {
        // Send an AJAX request to check for new chat messages
        fetch('/api/check-messages')
            .then(response => response.json())
            .then(messages => {
                // Display new chat messages in the chat window
                messages.forEach(message => {
                    chatMessages.innerHTML += `<div class="message">${message.text}</div>`;
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, 3000); // 3 seconds (adjust the interval as needed)
});

