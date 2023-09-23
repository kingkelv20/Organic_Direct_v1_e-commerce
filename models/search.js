// search.js

document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const filterForm = document.getElementById('filter-form');
    const productList = document.getElementById('product-list');

    // Handle product search
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = document.getElementById('search-term').value;

        // Send an AJAX request to search for products
        fetch(`/api/search-products?keyword=${searchTerm}`)
            .then(response => response.json())
            .then(products => {
                displayProducts(products);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    // Handle product filtering
    filterForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const category = document.getElementById('category').value;
        const priceRange = document.getElementById('price-range').value;

        // Send an AJAX request to filter products
        fetch(`/api/filter-products?category=${category}&priceRange=${priceRange}`)
            .then(response => response.json())
            .then(products => {
                displayProducts(products);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    // Display products on the page
    function displayProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            // Display product information on the page
            productList.innerHTML += `
                <div class="product">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <!-- Add more product details as needed -->
                    <button class="add-to-cart" data-product-id="${product.id}" data-product-name="${product.name}" data-product-price="${product.price}">Add to Cart</button>
                </div>
            `;
        });
    }
});

