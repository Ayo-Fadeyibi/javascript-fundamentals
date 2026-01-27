const form = document.getElementById("habit-form");
const input = document.getElementById("habit-input");
const list = document.getElementById("habit-list");

function loadHabits() {
  return JSON.parse(localStorage.getItem("habits")) || [];
}

function saveHabits(habits) {
  localStorage.setItem("habits", JSON.stringify(habits));
}

function renderHabits() {
  list.innerHTML = "";
  loadHabits().forEach((habit, index) => {
    const li = document.createElement("li");
    li.textContent = habit.name;
    if (habit.done) li.classList.add("completed");

    li.addEventListener("click", () => {
      const habits = loadHabits();
      habits[index].done = !habits[index].done;
      saveHabits(habits);
      renderHabits();
    });

    const del = document.createElement("button");
    del.textContent = "❌";
    del.addEventListener("click", e => {
      e.stopPropagation();
      const habits = loadHabits().filter((_, i) => i !== index);
      saveHabits(habits);
      renderHabits();
    });

    li.appendChild(del);
    list.appendChild(li);
  });
}

form.addEventListener("submit", e => {
  e.preventDefault();
  if (!input.value.trim()) return;
  const habits = loadHabits();
  habits.push({ name: input.value, done: false });
  saveHabits(habits);
  input.value = "";
  renderHabits();
});

renderHabits();
