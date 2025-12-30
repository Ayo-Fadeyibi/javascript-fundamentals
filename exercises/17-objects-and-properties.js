// 17-objects-and-properties.js

// basic object
let user = {
  name: "Ayo",
  age: 20,
  email: "ayofadeyibi@gmail.com",
  isStudent: true
};

// access properties
console.log("Name:", user.name);
console.log("Email:", user["email"]);

// update properties
user.age += 1;
console.log("Updated age:", user.age);

// add new property
user.country = "Australia";
console.log("Country:", user.country);

// object with nested data
let course = {
  title: "JavaScript Fundamentals",
  durationWeeks: 8,
  topics: ["strings", "arrays", "objects"],
  instructor: {
    name: "FreeCodeCamp",
    level: "Beginner"
  }
};

console.log("Course title:", course.title);
console.log("First topic:", course.topics[0]);
console.log("Instructor:", course.instructor.name);
