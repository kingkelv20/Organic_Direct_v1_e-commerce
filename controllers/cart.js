// cart.js

document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartList = document.getElementById('cart-list');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = button.getAttribute('data-product-id');
            const productName = button.getAttribute('data-product-name');
            const productPrice = button.getAttribute('data-product-price');

            // Send an AJAX request to the server to add the product to the cart
            fetch('/api/add-to-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: productId,
                    name: productName,
                    price: productPrice
                })
            })
            .then(response => response.json())
            .then(data => {
                // Update the cart display
                cartList.innerHTML = '';
                data.forEach(product => {
                    cartList.innerHTML += `<li>${product.name}: $${product.price}</li>`;
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    });
});

