// Function to add item to cart
function addToCart(event) {
    const button = event.target;
    const product = button.dataset.product;
    const price = parseFloat(button.dataset.price);

    // Retrieve existing cart items from localStorage or initialize an empty array
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the new item to the cart
    cartItems.push({ product, price });

    // Store the updated cart items back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Optionally, you can display a confirmation message or update the UI to reflect the addition
    alert('Item added to cart!');
}

// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Attach click event listener to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});
