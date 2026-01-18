// 33-regex-validator.js
// Regex validation suite: email, username, password

const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  username: /^[a-zA-Z0-9_]{3,16}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
};

function validateInput(type, value) {
  if (!patterns[type]) {
    return { valid: false, message: "Unknown validation type" };
  }

  const valid = patterns[type].test(value);

  return {
    valid,
    message: valid ? `${type} is valid ✅` : `${type} is invalid ❌`
  };
}

// Tests
console.log(validateInput("email", "ayofadeyibi@gmail.com"));
console.log(validateInput("email", "wrong-email"));

console.log(validateInput("username", "Ayo_20"));
console.log(validateInput("username", "a"));

console.log(validateInput("password", "pass1234"));
console.log(validateInput("password", "password"));
