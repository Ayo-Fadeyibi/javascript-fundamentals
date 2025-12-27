// 09-conditionals-and-logic.js

let score = 78;

// if / else if / else
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// logical operators
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// OR operator
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("You can relax today!");
}

// Math object
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("Random number:", randomNumber);

if (randomNumber > 5) {
  console.log("High number");
} else {
  console.log("Low number");
}
