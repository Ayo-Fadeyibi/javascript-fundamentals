// 14-leap-year-checker.js
// Leap year rules:
// - Divisible by 4
// - Not divisible by 100 unless divisible by 400

function isLeapYear(year) {
  if (year % 4 !== 0) {
    return `${year} is not a leap year.`;
  }

  if (year % 100 !== 0) {
    return `${year} is a leap year.`;
  }

  if (year % 400 === 0) {
    return `${year} is a leap year.`;
  }

  return `${year} is not a leap year.`;
}

// Test cases
console.log(isLeapYear(2024)); // leap year
console.log(isLeapYear(1900)); // not a leap year
console.log(isLeapYear(2000)); // leap year
