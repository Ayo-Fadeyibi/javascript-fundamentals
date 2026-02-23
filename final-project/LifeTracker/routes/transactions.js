const express = require('express');
const transactionRouter = express.Router();
const { transactionArray } = require('../data/store');

function statsCalculation(transactions) {
    const incomeObjects = transactions.filter(transaction => transaction.type === "Income");
    const expenseObjects = transactions.filter(transaction => transaction.type === "Expense");

    const income = incomeObjects.reduce((acc, income) => {
        return acc + parseFloat(income.amount);
    }, 0)
    const expense = expenseObjects.reduce((acc, expense) => {
        return acc + parseFloat(expense.amount);
    }, 0)
    
    const finalArray = {
        totalIncome: income,
        totalExpense: expense,
        balance: income - expense
    }
    
    return finalArray;

}

function isInvalidTransaction(type, amount, balance) {
    if(type === 'Expense' && balance - parseFloat(amount) < 0){
        return true;
    }
    return false;
}

transactionRouter.get('/', (req, res) => {
    res.json(statsCalculation(transactionArray));
})

transactionRouter.post('/', (req, res) => {
    const { type, amount } = req.body;
    const { balance } = statsCalculation(transactionArray);

    if (isInvalidTransaction(type, amount, balance)) {
        return res.status(400).json({
            message: "Insufficient balance",
            stats: statsCalculation(transactionArray)
        });
    }

    transactionArray.push({ type, amount });

    res.json({
        message: "Transaction successful",
        stats: statsCalculation(transactionArray)
    });
});

module.exports = transactionRouter;