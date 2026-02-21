const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

const taskRouter = require('./routes/tasks');
const transactionRouter = require('./routes/transactions');
const cryptoRouter = require('./routes/crypto');

app.use('/tasks', taskRouter);
app.use('/transactions', transactionRouter);
app.use('/crypto', cryptoRouter);

app.listen(port);
