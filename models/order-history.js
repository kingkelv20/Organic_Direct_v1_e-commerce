// order-history.js

document.addEventListener('DOMContentLoaded', function () {
    const orderHistoryList = document.getElementById('order-history-list');

    // Fetch the user's order history from the server
    fetch('/api/order-history')
        .then(response => response.json())
        .then(orders => {
            orders.forEach(order => {
                // Display order information (order number, date, total cost, etc.) on the page
                orderHistoryList.innerHTML += `
                    <div class="order">
                        <h3>Order Number: ${order.orderNumber}</h3>
                        <p>Date: ${order.date}</p>
                        <p>Total Cost: $${order.totalCost}</p>
                        <!-- Add more order details as needed -->
                        <button class="track-order" data-order-id="${order.id}">Track Order</button>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

