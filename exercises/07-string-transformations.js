// 07-string-transformations.js

let message = "JavaScript is fun";

// repeat
console.log(message.repeat(2));

// replace
let updatedMessage = message.replace("fun", "powerful");
console.log(updatedMessage);

// replaceAll
let noisyText = "hello hello hello";
let cleanedText = noisyText.replaceAll("hello", "hi");
console.log(cleanedText);

// realistic example
let userMessage = "   I LOVE JAVASCRIPT   ";
let normalised = userMessage.trim().toLowerCase();
console.log(normalised.replace("javascript", "coding"));
