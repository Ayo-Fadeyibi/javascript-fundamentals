// 24-closures-and-array-creation.js

// Closure example
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

let counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

let counter2 = createCounter();
console.log(counter2()); // 1

// Array.from
let numbers = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(numbers);

// Array.fill
let filledArray = new Array(3).fill("JS");
console.log(filledArray);
