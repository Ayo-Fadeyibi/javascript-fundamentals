const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

const incomeStat = document.getElementById('incomeStat');
const expenseStat = document.getElementById('expenseStat');
const balanceStat = document.getElementById('balanceStat');

const optionSelect = document.getElementById('typeInput');
const amountInput = document.getElementById('amountInput');
const categoryInput = document.getElementById('categoryInput');
const addTransactionButton = document.getElementById('addTransactionBtn');
const transactionList = document.getElementById('transactionList');

const loadCryptoButton = document.getElementById('loadCryptoBtn');
const cryptoList = document.getElementById('cryptoData');

window.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    loadTransactions();
});

async function loadTasks() {
    const response = await fetch ('/tasks');
    const tasks = await response.json();
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.title;
        taskList.appendChild(li);
    });
}

async function loadTransactions() {
    const response = await fetch('/transactions');
    const transactions = await response.json();
    transactionList.innerHTML = '';
    transactions.forEach(transaction => {
        const li = document.createElement('li');
        li.textContent = transaction.description;
        transactionList.appendChild(li);
    })
}

async function addTask() {
    const title = taskInput.value;
    await fetch("/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title })
    });

    taskInput.value = "";
    loadTasks();
}

addTaskButton.addEventListener('click', addTask);