// product-list.js

document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');

    // Fetch the list of products from the server
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                // Display product information (name, price, etc.) on the page
                productList.innerHTML += `
                    <div class="product">
                        <h3>${product.name}</h3>
                        <p>Price: $${product.price}</p>
                        <!-- Add more product details as needed -->
                        <button class="add-to-cart" data-product-id="${product.id}" data-product-name="${product.name}" data-product-price="${product.price}">Add to Cart</button>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

