const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

const incomeStat = document.getElementById('incomeStat');
const expenseStat = document.getElementById('expenseStat');
const balanceStat = document.getElementById('balanceStat');

const optionSelect = document.getElementById('typeInput');
const amountInput = document.getElementById('amountInput');
const addTransactionButton = document.getElementById('addTransactionBtn');
const transactionList = document.getElementById('transactionList');

const loadStockButton = document.getElementById('loadStockBtn');
const stockList = document.getElementById('stockData');

window.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    updateStats();
});

async function loadTasks() {
    const response = await fetch ('/tasks');
    const tasks = await response.json();
    taskList.innerHTML = '';
    tasks.forEach(task => {
        taskList.innerHTML += `
            <li>
            ${task.title}
            <button class="delete-btn" data-id="${task.id}">Delete</button>
            <input type="checkbox" class="checkbox"/>
            </li>
        `;
    });
}

async function addTask() {
    const title = taskInput.value;
    if(!title) {return;}
    await fetch("/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title})
    });

    taskInput.value = "";
    loadTasks();
}

const deleteBtns = document.querySelectorAll('.delete-btn');

async function deleteTask (taskId) {
   try{
        const response = await fetch(`/tasks/${taskId}`, {
            method: 'DELETE'
        })

        if(response.ok){
            alert("Task deleted successfully");
            loadTasks();
        }else {
            console.error('Deletion failed:', response.statusText);
        }
   }catch (error) {
    console.error(error);
   }
}

taskList.addEventListener("click", (event) => {
    const childElement = event.target;
    const taskId = childElement.getAttribute("data-id");
    deleteTask(taskId);
})

addTaskButton.addEventListener('click', addTask);

async function updateStats() {
   const response = await fetch('/transactions');
   const transaction = await response.json();
   const {totalIncome, totalExpense, balance} = transaction;

   incomeStat.textContent = totalIncome;
   expenseStat.textContent = totalExpense;
   balanceStat.textContent = balance;
}

async function addTransaction() {
    const transactionType = optionSelect.value;
    const amountValue = amountInput.value;

    if(!transactionType || !amountValue) {return;}
    await fetch("/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: transactionType, amount: amountValue})
    }); 
    amountInput.value = "";

    updateStats();
}

addTransactionButton.addEventListener("click", addTransaction);

async function loadStockData() {
    const response = await fetch("http://localhost:3000/stock");
    const stockData = await response.json();

    stockList.innerHTML = '';

    stockData.prices.forEach(day => {
        stockList.innerHTML += `
            <li>
                Date: ${day.date} |
                Open: ${day.open} |
                Close: ${day.close} |
                Volume: ${day.volume}
            </li>
        `;
    });
}
loadStockButton.addEventListener('click', loadStockData);