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
