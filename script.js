// Products
const products = [
  { name: "Sneakers", price: 2500 },
  { name: "Headphones", price: 1500 },
  { name: "Backpack", price: 2000 },
  { name: "Watch", price: 3000 }
];

// Load cart from storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count
function updateCartCount() {
  const countElements = document.querySelectorAll("#cart-count");
  countElements.forEach(el => el.textContent = cart.length);
}

updateCartCount();

// Display products (only if on products page)
const container = document.getElementById("products-container");

if (container) {
  products.forEach((product, index) => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>KES ${product.price}</p>
      <button data-index="${index}">Add to Cart</button>
    `;

    container.appendChild(div);
  });

  container.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const index = e.target.dataset.index;
      cart.push(products[index]);

      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();

      e.target.textContent = "Added!";
      setTimeout(() => e.target.textContent = "Add to Cart", 1000);
    }
  });
}

// Display cart items (only on cart page)
const cartContainer = document.getElementById("cart-items");

if (cartContainer) {
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty</p>";
  } else {
    cart.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("product");

      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>KES ${item.price}</p>
      `;

      cartContainer.appendChild(div);
    });
  }
    }
