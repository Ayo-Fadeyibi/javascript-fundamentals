// 34-text-cleaner-frequency.js
// Cleans text using regex and returns word frequency counts

function getWordFrequency(text) {
  const cleaned = text
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")     // remove punctuation/numbers
    .trim();

  if (cleaned === "") return {};

  const words = cleaned.split(/\s+/);

  return words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
}

// Test
const sample = "Hello hello!! This is a test... A test, a TEST!!!";
console.log(getWordFrequency(sample));
