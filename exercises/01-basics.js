// 01-basics.js

// Variables
let name = "Ayo";
let age = 20;

// Function
function introduce(personName, personAge) {
  return `Hi, my name is ${personName} and I am ${personAge} years old.`;
}

// Loop
for (let i = 1; i <= 3; i++) {
  console.log(introduce(name, age));
}

// Conditionals
function canVote(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}

console.log(canVote(age));

// Strings and variables practice

let firstName = "Ayo";
let lastName = "Fadeyibi";
let yearOfBirth = 2004;
let currentYear = 2025;

let fullName = firstName + " " + lastName;
let age = currentYear - yearOfBirth;

console.log("Full name:", fullName);
console.log("Age:", age);

// Template literals
let introduction = `My name is ${fullName} and I am ${age} years old.`;
console.log(introduction);
