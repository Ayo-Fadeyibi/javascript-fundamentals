// 36-recursive-factorial.js
// Calculates factorial using recursion

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // base case
  }

  return n * factorial(n - 1);
}

// Tests
console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
console.log(factorial(1)); // 1
