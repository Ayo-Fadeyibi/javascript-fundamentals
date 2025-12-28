// 11-functions-and-control-structures.js

// undefined vs null
let score;
console.log("Score is:", score); // undefined

let result = null;
console.log("Result is:", result); // null

// switch statement
let role = "admin";

switch (role) {
  case "admin":
    console.log("Full access granted");
    break;
  case "user":
    console.log("Limited access granted");
    break;
  default:
    console.log("No access");
}

// anonymous function
let greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("Ayo"));

// arrow function
let add = (a, b) => a + b;
console.log("Sum:", add(3, 5));

// arrow function with block
let checkAge = (age) => {
  if (age >= 18) {
    return "Adult";
  }
  return "Minor";
};

console.log(checkAge(20));
