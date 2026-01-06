// 25-password-strength-checker.js

function isStrongPassword(password) {
  let hasLetter = false;
  let hasNumber = false;

  for (let char of password) {
    if (char >= "a" && char <= "z" || char >= "A" && char <= "Z") {
      hasLetter = true;
    } else if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
  }

  return password.length >= 8 && hasLetter && hasNumber;
}

// Tests
console.log(isStrongPassword("abc123"));       // false
console.log(isStrongPassword("abc12345"));     // true
console.log(isStrongPassword("password"));     // false
console.log(isStrongPassword("pass1234"));     // true
