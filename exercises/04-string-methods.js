// 04-string-methods.js

let message = "Hello, welcome to JavaScript!";
let name = "Ayo";

// length
console.log("Message length:", message.length);

// indexOf
console.log("Index of 'welcome':", message.indexOf("welcome"));
console.log("Index of 'Python':", message.indexOf("Python"));

// template literals
let greeting = `Hi ${name}, your message has ${message.length} characters.`;
console.log(greeting);
