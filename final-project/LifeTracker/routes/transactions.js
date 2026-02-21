const express = require('express');
const transactionRouter = express.Router();

transactionRouter.get('/', (req, res) => {
    res.send('Transactions route');
})

module.exports = transactionRouter;