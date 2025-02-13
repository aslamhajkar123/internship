document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.querySelector("input[type='email']").value;
    let password = document.querySelector("input[type='password']").value;

    if (email === "test@example.com" && password === "password123") {
        alert("Login successful! Redirecting...");
        window.location.href = "products/products.html";  // Redirect to products page
    } else {
        alert("Invalid credentials. Please try again.");
        window.location.href = "products/products.html"; 
    }
});
