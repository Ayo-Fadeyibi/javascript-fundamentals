// 21-text-analyzer.js

function analyzeText(sentence) {
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
    words: words.length,
    vowels: vowelCount,
    consonants: consonantCount
  };
}

// Test
let result = analyzeText("JavaScript is really powerful!");
console.log(result);
