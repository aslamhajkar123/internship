document.addEventListener("DOMContentLoaded", function() {
    updateCartCount(); // Ensure cart count is updated on page load

    // Add to cart button functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            let button = event.target;
            let productCard = button.closest('.product-card');
    
            let product = {
                name: productCard.querySelector('h3').innerText,
                price: parseFloat(productCard.querySelector('.price').innerText.replace('₹', '')),
                image: productCard.querySelector('img').getAttribute('src'), // Ensure image path is stored
                quantity: 1
            };
    
            // Get updated cart from localStorage
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
            let existingItem = cart.find(item => item.name === product.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push(product);
            }
    
            // Save updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Update the cart count dynamically
            updateCartCount();
        });
    });

    // Function to update cart count in navbar
    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById("cart-count").innerText = cartCount;
    }

    // Navigate to cart page
    document.getElementById("cart-link").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "cart/cart.html";
    });
});
