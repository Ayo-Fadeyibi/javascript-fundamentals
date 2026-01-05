// 23-type-conversion-and-wrappers.js

let numString = "7";

// type conversion
let convertedNumber = Number(numString);
console.log(convertedNumber, typeof convertedNumber);

// toString
let backToString = convertedNumber.toString();
console.log(backToString, typeof backToString);

// wrapper objects (not recommended)
let wrappedString = new String("hello");
let primitiveString = "hello";

console.log(typeof wrappedString);   // object
console.log(typeof primitiveString); // string
console.log(wrappedString == primitiveString);  // true
console.log(wrappedString === primitiveString); // false
