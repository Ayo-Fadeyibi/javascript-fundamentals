// 22-student-score-processor.js

let students = [
  { name: "Ayo", score: 85 },
  { name: "Sam", score: 42 },
  { name: "Lina", score: 74 },
  { name: "Mark", score: 30 }
];

function processScores(studentList) {
  let total = 0;
  let results = [];

  for (let student of studentList) {
    total += student.score;

    results.push({
      name: student.name,
      score: student.score,
      passed: student.score >= 50
    });
  }

  let average = total / studentList.length;

  return {
    averageScore: average.toFixed(1),
    results: results
  };
}

// Test
console.log(processScores(students));
