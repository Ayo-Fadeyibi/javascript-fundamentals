const express = require('express');
const cryptoRouter = express.Router();

cryptoRouter.get('/', (req, res) => {
    res.send('Crypto route');
})

module.exports = cryptoRouter;