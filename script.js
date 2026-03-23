let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
  document.querySelectorAll("#cart-count").forEach(el => {
    el.textContent = cart.length;
  });
}

updateCart();

document.querySelectorAll(".product button").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.parentElement;
    const name = product.querySelector("h3").textContent;
    const price = product.querySelector("p").textContent;

    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();

    button.textContent = "Added!";
    setTimeout(() => button.textContent = "Add to Cart", 1000);
  });
});

// CART PAGE
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
        <p>${item.price}</p>
      `;

      cartContainer.appendChild(div);
    });
  }
}