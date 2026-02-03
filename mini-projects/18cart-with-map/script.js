const buttons = document.querySelectorAll("button[data-item]");
const cartList = document.getElementById("cart-list");
const totalDisplay = document.getElementById("total");

const cart = new Map(); // Map(item → { price, quantity })

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((value, key) => {
    const li = document.createElement("li");
    li.textContent = `${key} x${value.quantity} = $${value.price * value.quantity}`;
    cartList.appendChild(li);

    total += value.price * value.quantity;
  });

  totalDisplay.textContent = `Total: $${total}`;
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.dataset.item;
    const price = Number(btn.dataset.price);

    if (cart.has(item)) {
      cart.get(item).quantity++;
    } else {
      cart.set(item, { price, quantity: 1 });
    }

    renderCart();
  });
});
