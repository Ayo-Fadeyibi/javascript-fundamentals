const form = document.getElementById("tag-form");
const input = document.getElementById("tag-input");
const tagList = document.getElementById("tag-list");

const tags = new Set(); // 🚀 Set prevents duplicates

function renderTags() {
  tagList.innerHTML = "";
  tags.forEach(tag => {
    const span = document.createElement("span");
    span.textContent = tag;
    span.className = "tag";

    span.addEventListener("click", () => {
      tags.delete(tag);
      renderTags();
    });

    tagList.appendChild(span);
  });
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const value = input.value.trim().toLowerCase();
  if (!value) return;

  tags.add(value); // duplicates auto ignored
  input.value = "";
  renderTags();
});
