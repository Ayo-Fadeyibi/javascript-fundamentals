const express = require('express');
const cryptoRouter = express.Router();

cryptoRouter.get('/crypto', (req, res) => {
    res.send('Crypto route');
})

export default cryptoRouter;