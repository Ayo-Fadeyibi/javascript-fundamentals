// 28-expense-summary.js

const expenses = [
  { item: "Food", amount: 30, refunded: false },
  { item: "Transport", amount: 15, refunded: false },
  { item: "Subscription", amount: 10, refunded: true },
  { item: "Books", amount: 45, refunded: false }
];

function calculateExpenseSummary(expenseList, budget) {
  const validExpenses = expenseList.filter(exp => !exp.refunded);

  const totalSpent = validExpenses.reduce(
    (sum, exp) => sum + exp.amount,
    0
  );

  const overBudget = totalSpent > budget;

  return {
    totalSpent,
    overBudget
  };
}

// Test
console.log(calculateExpenseSummary(expenses, 80));
