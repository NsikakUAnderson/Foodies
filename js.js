// Select all Buy buttons
const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name;
    const price = parseInt(btn.dataset.price);

    // Get existing cart from localStorage or empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add new item
    cart.push({name, price});

    // Save updated cart
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} added to cart!`);
  });
});

