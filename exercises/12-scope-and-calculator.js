// 12-scope-and-calculator.js

// Global scope
let appName = "Simple Calculator";

function calculate(a, b, operator) {
  // Local scope
  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b !== 0 ? a / b : "Cannot divide by zero";
      break;
    default:
      result = "Invalid operator";
  }

  return result;
}

// Using the function
console.log(appName);
console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, "*"));
console.log(calculate(10, 0, "/"));
