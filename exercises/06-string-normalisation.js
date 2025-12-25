// 06-string-normalisation.js

let rawInput = "   JavaScript is Powerful!   ";

// trim
let cleanedInput = rawInput.trim();
console.log("Trimmed:", cleanedInput);

// case conversion
console.log("Uppercase:", cleanedInput.toUpperCase());
console.log("Lowercase:", cleanedInput.toLowerCase());

// slice
let firstWord = cleanedInput.slice(0, 10);
console.log("First word:", firstWord);

// realistic comparison
let userChoice = "  YES ";
if (userChoice.trim().toLowerCase() === "yes") {
  console.log("User agreed");
} else {
  console.log("User disagreed");
}
