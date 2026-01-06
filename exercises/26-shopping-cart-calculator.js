// 26-shopping-cart-calculator.js

let cart = [
  { name: "Laptop", price: 900, quantity: 1 },
  { name: "Mouse", price: 25, quantity: 2 },
  { name: "USB Cable", price: 10, quantity: 0 }
];

function calculateTotal(cartItems) {
  let total = 0;

  for (let item of cartItems) {
    if (item.quantity > 0) {
      total += item.price * item.quantity;
    }
  }

  let discountApplied = false;

  if (total >= 100) {
    total *= 0.9;
    discountApplied = true;
  }

  return {
    total: total.toFixed(2),
    discountApplied
  };
}

// Test
console.log(calculateTotal(cart));
