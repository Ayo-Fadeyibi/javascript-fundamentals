const input = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("item-list");
const highlightBtn = document.getElementById("highlight-btn");

addBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return;

  const li = document.createElement("li");
  li.textContent = value;

  list.appendChild(li);
  input.value = "";
});

highlightBtn.addEventListener("click", () => {
  const items = document.querySelectorAll("#item-list li");

  items.forEach(item => {
    item.style.background = "yellow";
  });
});
