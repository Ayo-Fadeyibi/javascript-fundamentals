// 19-objects-advanced.js

let user = {
  id: 1,
  name: "Ayo",
  age: 20,
  role: "student"
};

// dot vs bracket notation
console.log(user.name);
console.log(user["role"]);

let key = "age";
console.log("Dynamic access:", user[key]);

// in vs hasOwnProperty
console.log("name in user:", "name" in user);
console.log("email in user:", "email" in user);
console.log("Has own 'role':", user.hasOwnProperty("role"));

// destructuring
let { name, age } = user;
console.log("Destructured:", name, age);

// JSON stringify
let jsonString = JSON.stringify(user);
console.log("JSON string:", jsonString);

// JSON parse
let parsedUser = JSON.parse(jsonString);
console.log("Parsed object:", parsedUser);
