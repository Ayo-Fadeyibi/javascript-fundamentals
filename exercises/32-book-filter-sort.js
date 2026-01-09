// 32-book-filter-sort.js
// Filters books by year and sorts them in ascending order

const books = [
  { title: "The Hobbit", releaseYear: 1937 },
  { title: "1984", releaseYear: 1949 },
  { title: "Brave New World", releaseYear: 1932 },
  { title: "Dune", releaseYear: 1965 }
];

function sortByYear(book1, book2) {
  return book1.releaseYear - book2.releaseYear;
}

function getClassicBooks(bookList) {
  return bookList
    .filter(book => book.releaseYear < 1950)
    .sort(sortByYear)
    .map(book => book.title);
}

// Test
console.log(getClassicBooks(books));
