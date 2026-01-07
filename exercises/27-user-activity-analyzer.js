// 27-user-activity-analyzer.js

const users = [
  { name: "Ayo", active: true, verified: true },
  { name: "Sam", active: false, verified: true },
  { name: "Lina", active: true, verified: true },
  { name: "Mark", active: true, verified: false }
];

// filter active users
const activeUsers = users.filter(user => user.active);

// map to names
const activeUserNames = activeUsers.map(user => user.name);

// some: check if any user is inactive
const hasInactiveUsers = users.some(user => !user.active);

// every: check if all users are verified
const allVerified = users.every(user => user.verified);

console.log({
  activeUserNames,
  hasInactiveUsers,
  allVerified
});
