// 10-number-parsing-and-formatting.js

let inputAge = "20";
let inputPrice = "19.995";
let invalidInput = "abc";

// parseInt
let age = parseInt(inputAge);
console.log("Parsed age:", age);

// parseFloat
let price = parseFloat(inputPrice);
console.log("Parsed price:", price);

// isNaN
console.log("Is invalidInput NaN?", isNaN(invalidInput));
console.log("Is price NaN?", isNaN(price));

// toFixed
let roundedPrice = price.toFixed(2);
console.log("Rounded price:", roundedPrice);

// realistic example
let userScore = "85.7";

let score = parseFloat(userScore);
if (!isNaN(score)) {
  console.log(`Final score: ${score.toFixed(1)}`);
} else {
  console.log("Invalid score input");
}
