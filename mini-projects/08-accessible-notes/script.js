const editor = document.getElementById("editor");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const notesList = document.getElementById("notes-list");
const status = document.getElementById("status");

function loadNotes() {
  return JSON.parse(localStorage.getItem("notes")) || [];
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function announce(message) {
  status.textContent = message;
  setTimeout(() => (status.textContent = ""), 1200);
}

function renderNotes() {
  notesList.innerHTML = "";
  const notes = loadNotes();

  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.textContent = note;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Delete";
    removeBtn.style.marginLeft = "10px";
    removeBtn.classList.add("danger");
    removeBtn.setAttribute("aria-label", `Delete note ${index + 1}`);

    removeBtn.addEventListener("click", () => {
      const updated = loadNotes().filter((_, i) => i !== index);
      saveNotes(updated);
      renderNotes();
      announce("Note deleted.");
    });

    li.appendChild(removeBtn);
    notesList.appendChild(li);
  });
}

saveBtn.addEventListener("click", () => {
  const text = editor.textContent.trim();
  if (!text) {
    announce("Nothing to save.");
    return;
  }

  const notes = loadNotes();
  notes.unshift(text);
  saveNotes(notes);

  editor.textContent = "";
  renderNotes();
  announce("Note saved.");
});

clearBtn.addEventListener("click", () => {
  editor.textContent = "";
  announce("Editor cleared.");
});

// Keyboard accessibility improvement
editor.addEventListener("keydown", (e) => {
  // Ctrl+S to save
  if (e.ctrlKey && e.key.toLowerCase() === "s") {
    e.preventDefault();
    saveBtn.click();
  }
});

renderNotes();
