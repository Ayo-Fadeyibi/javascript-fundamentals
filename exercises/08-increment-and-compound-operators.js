// 08-increment-and-compound-operators.js

let count = 0;

// increment
count++;
console.log("After increment:", count);

// decrement
count--;
console.log("After decrement:", count);

// compound operators
count += 5;
console.log("After += 5:", count);

count *= 2;
console.log("After *= 2:", count);

count -= 3;
console.log("After -= 3:", count);

// realistic example
let totalScore = 0;
totalScore += 10; // correct answer
totalScore += 5;  // bonus
totalScore -= 3;  // penalty

console.log("Final score:", totalScore);
