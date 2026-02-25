const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

const taskRouter = require('./routes/tasks');
const transactionRouter = require('./routes/transactions');
const stockRouter = require('./routes/stock');

app.use('/tasks', taskRouter);
app.use('/transactions', transactionRouter);
app.use('/stock', stockRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
