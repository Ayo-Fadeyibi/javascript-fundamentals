const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const clearBtn = document.getElementById("clear-btn");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.textContent = task;

  // Toggle completed using classList
  taskText.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.setAttribute("aria-label", "Delete task");

  deleteBtn.addEventListener("click", () => {
    list.removeChild(li); // removeChild()
  });

  li.appendChild(taskText);   // appendChild()
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
});

// Clear all tasks
clearBtn.addEventListener("click", () => {
  list.innerHTML = "";
});
