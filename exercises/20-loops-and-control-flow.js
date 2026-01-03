// 20-loops-and-control-flow.js

// for loop
for (let i = 1; i <= 3; i++) {
  console.log("for loop count:", i);
}

// for...of (arrays)
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

// for...in (objects)
let user = { name: "Ayo", age: 20, role: "student" };
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

// while loop
let count = 0;
while (count < 3) {
  console.log("while count:", count);
  count++;
}

// do...while loop
let number = 0;
do {
  console.log("do...while number:", number);
  number++;
} while (number < 2);

// break & continue
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  if (i === 4) break;
  console.log("loop value:", i);
}

// labeled break (advanced)
outerLoop:
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      break outerLoop;
    }
    console.log(`i=${i}, j=${j}`);
  }
}
