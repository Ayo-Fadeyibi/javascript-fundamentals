const form = document.getElementById("order-form");
const nameInput = document.getElementById("name");
const productSelect = document.getElementById("product");
const quantitySelect = document.getElementById("quantity");
const summary = document.getElementById("summary");
const error = document.getElementById("error");

const prices = {
  Laptop: 900,
  Keyboard: 80,
  Mouse: 40
};

form.addEventListener("submit", (e) => {
  e.preventDefault(); // ✅ prevent refresh

  const name = nameInput.value.trim();
  const product = productSelect.value;
  const quantity = Number(quantitySelect.value);

  error.textContent = "";

  // ✅ validation
  if (!name) {
    error.textContent = "Name is required.";
    return;
  }
  if (!product) {
    error.textContent = "Please select a product.";
    return;
  }
  if (!quantity) {
    error.textContent = "Please select a quantity.";
    return;
  }

  const total = prices[product] * quantity;

  summary.textContent = `${name} ordered ${quantity} ${product}(s). Total: $${total}`;
  form.reset();
});
