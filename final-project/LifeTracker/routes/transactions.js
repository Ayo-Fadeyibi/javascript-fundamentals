const express = require('express');
const transactionRouter = express.Router();

transactionRouter.get('/', (req, res) => {
    res.json({});
})

module.exports = transactionRouter;