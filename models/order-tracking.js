// order-tracking.js

document.addEventListener('DOMContentLoaded', function () {
    const trackOrderButtons = document.querySelectorAll('.track-order');

    trackOrderButtons.forEach(button => {
        button.addEventListener('click', function () {
            const orderId = button.getAttribute('data-order-id');

            // Send an AJAX request to track the order
            fetch(`/api/track-order/${orderId}`)
                .then(response => response.json())
                .then(trackingInfo => {
                    // Display detailed tracking information (shipping status, expected delivery date, etc.)
                    // You can use a modal or a dedicated page to display this information
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    });
});

