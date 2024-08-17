// script.js
document.getElementById('addToCartButton').addEventListener('click', function() {
    const quantity = document.getElementById('quantity').value;
    alert(`${quantity} item(s) added to your cart!`);
});
