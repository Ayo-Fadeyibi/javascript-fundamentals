const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");
const saveQuoteBtn = document.getElementById("save-quote-btn");
const clearBtn = document.getElementById("clear-btn");
const favouritesList = document.getElementById("favourites-list");

const quotes = [
  { text: "Discipline beats motivation.", author: "Unknown" },
  { text: "Small steps every day.", author: "Unknown" },
  { text: "You become what you repeat.", author: "James Clear" },
  { text: "Your future is created by what you do today.", author: "Unknown" },
  { text: "If it was easy, everyone would do it.", author: "Unknown" }
];

let currentQuote = null;

// ---- LocalStorage Helpers ----
function loadFavourites() {
  return JSON.parse(localStorage.getItem("favourites")) || [];
}

function saveFavourites(favourites) {
  localStorage.setItem("favourites", JSON.stringify(favourites));
}

// ---- DOM Rendering ----
function renderFavourites() {
  favouritesList.innerHTML = "";
  const favourites = loadFavourites();

  for (let fav of favourites) {
    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = `"${fav.text}" — ${fav.author}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", () => {
      const updated = loadFavourites().filter(q => q.text !== fav.text);
      saveFavourites(updated);
      renderFavourites();
    });

    li.appendChild(text);
    li.appendChild(removeBtn);
    favouritesList.appendChild(li);
  }
}

// ---- Quote Logic ----
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function showNewQuote() {
  currentQuote = getRandomQuote();
  quoteText.textContent = `"${currentQuote.text}"`;
  quoteAuthor.textContent = `— ${currentQuote.author}`;
}

// ---- Events ----
newQuoteBtn.addEventListener("click", showNewQuote);

saveQuoteBtn.addEventListener("click", () => {
  if (!currentQuote) return;

  const favourites = loadFavourites();

  const alreadySaved = favourites.some(q => q.text === currentQuote.text);
  if (alreadySaved) {
    saveQuoteBtn.textContent = "Already Saved ✅";
    setTimeout(() => (saveQuoteBtn.textContent = "Save Quote ⭐"), 800);
    return;
  }

  favourites.push(currentQuote);
  saveFavourites(favourites);
  renderFavourites();

  saveQuoteBtn.textContent = "Saved ✅";
  setTimeout(() => (saveQuoteBtn.textContent = "Save Quote ⭐"), 800);
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("favourites");
  renderFavourites();
});

// Initial render
renderFavourites();
