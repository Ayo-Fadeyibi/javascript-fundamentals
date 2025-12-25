// 05-string-search-and-slice.js

let sentence = "JavaScript is fun and powerful!";
let keyword = "fun";

// includes
console.log("Contains 'fun':", sentence.includes(keyword));
console.log("Contains 'Python':", sentence.includes("Python"));

// slice
let firstWord = sentence.slice(0, 10);
let lastPart = sentence.slice(14);

console.log("First part:", firstWord);
console.log("Last part:", lastPart);

// combine with template literals
let summary = `The sentence contains ${sentence.length} characters.`;
console.log(summary);
