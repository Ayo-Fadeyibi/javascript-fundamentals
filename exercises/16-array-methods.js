// 16-array-methods.js

// split & join
let sentence = "JavaScript arrays are powerful";
let words = sentence.split(" ");
console.log("Words:", words);

let joinedSentence = words.join("-");
console.log("Joined:", joinedSentence);

// array creation
let numbers = [1, 2, 3];

// push & pop
numbers.push(4);
console.log("After push:", numbers);

numbers.pop();
console.log("After pop:", numbers);

// unshift & shift
numbers.unshift(0);
console.log("After unshift:", numbers);

numbers.shift();
console.log("After shift:", numbers);

// includes & indexOf
console.log("Includes 2:", numbers.includes(2));
console.log("Index of 3:", numbers.indexOf(3));

// concat (non-mutating)
let moreNumbers = [5, 6];
let combined = numbers.concat(moreNumbers);
console.log("Combined:", combined);

// splice (mutating)
combined.splice(2, 1, 99);
console.log("After splice:", combined);
