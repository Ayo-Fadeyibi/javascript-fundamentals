// 30-order-validation-summary.js

const orders = [
  { id: 1, amount: 120, paid: true, cancelled: false },
  { id: 2, amount: 60, paid: true, cancelled: false },
  { id: 3, amount: 30, paid: false, cancelled: true }
];

function summarizeOrders(orderList) {
  const allPaid = orderList.every(order => order.paid);
  const hasCancelled = orderList.some(order => order.cancelled);

  const totalRevenue = orderList
    .filter(order => order.paid && !order.cancelled)
    .reduce((sum, order) => sum + order.amount, 0);

  return {
    allPaid,
    hasCancelled,
    totalRevenue
  };
}

// Test
console.log(summarizeOrders(orders));
