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
        taskList.innerHTML += `
            <li>
            ${task.title}
            <button class="delete-btn" data-id="${task.id}">Delete</button>
            <input type="checkbox" class="checkbox"/>
            </li>
        `;
    });
}

async function loadTransactions() {
    const response = await fetch('/transactions');
    const transactions = await response.json();
    transactionList.innerHTML = '';
    transactions.forEach(transaction => {
        transactionList.innerHTML += `
            <li>${transaction.description}</li>
        `;
    })
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