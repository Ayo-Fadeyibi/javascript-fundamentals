// 15-arrays-and-destructuring.js

// 1D array
let fruits = ["apple", "banana", "orange"];
console.log("First fruit:", fruits[0]);

// Destructuring
let [firstFruit, secondFruit] = fruits;
console.log("Destructured:", firstFruit, secondFruit);

// 2D array
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Center value:", matrix[1][1]);

// Destructuring from 2D array
let [row1, row2] = matrix;
let [a, b, c] = row1;

console.log("First row values:", a, b, c);
