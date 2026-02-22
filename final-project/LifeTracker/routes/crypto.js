const express = require('express');
const cryptoRouter = express.Router();

cryptoRouter.get('/', (req, res) => {
    res.json([]);
})

module.exports = cryptoRouter;