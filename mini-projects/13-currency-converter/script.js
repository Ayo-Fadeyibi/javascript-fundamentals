const rates = { USD: 1, EUR: 0.92, NGN: 1600 };

form.addEventListener("submit", e => {
  e.preventDefault();
  const amount = Number(input.value);
  const from = fromSelect.value;
  const to = toSelect.value;
  const result = (amount / rates[from]) * rates[to];
  output.textContent = `Converted: ${result.toFixed(2)} ${to}`;
});
