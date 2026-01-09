// 31-text-statistics.js
// Analyzes text and returns word, vowel, and consonant counts

function getTextStatistics(sentence) {
  let vowels = "aeiou";
  let words = sentence.trim().split(/\s+/);

  let vowelCount = 0;
  let consonantCount = 0;

  for (let char of sentence.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }

  return {
    wordCount: words.length,
    vowelCount,
    consonantCount
  };
}

// Test
console.log(getTextStatistics("JavaScript is powerful and fun!"));
