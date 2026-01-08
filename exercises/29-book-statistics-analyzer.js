// 29-book-statistics-analyzer.js

const books = [
  { title: "The Hobbit", releaseYear: 1937 },
  { title: "1984", releaseYear: 1949 },
  { title: "Brave New World", releaseYear: 1932 },
  { title: "Dune", releaseYear: 1965 }
];

function analyzeBooks(bookList) {
  const totalBooks = bookList.length;

  const averageYear =
    bookList.reduce((sum, book) => sum + book.releaseYear, 0) /
    totalBooks;

  const classicTitles = bookList
    .filter(book => book.releaseYear < 1950)
    .sort((a, b) => a.releaseYear - b.releaseYear)
    .map(book => book.title);

  return {
    totalBooks,
    averageYear: Math.round(averageYear),
    classicTitles
  };
}

// Test
console.log(analyzeBooks(books));
