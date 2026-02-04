let poll = new Map();

function addOption (option) {
  if (option.trim().length < 1) {
    return `Option cannot be empty.`
  }

  if (!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`
  }

  return `Option "${option}" already exists.`;
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`
  }
  const voters = poll.get(option);

  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

addOption("Pizza");
addOption("Tacos");
addOption("Sushi");

vote("Pizza", "user_1");
vote("Tacos", "user_2");
vote("Pizza", "user_3");

function displayResults() {
  let results = "Poll Results:\n";

  poll.forEach((voters, option) => {
    results += `${option}: ${voters.size} votes\n`;
  });

  return results.trim();
}
