const express = require('express');
const router = express.Router();

router.get('/crypto', (req, res) => {
    res.send('Crypto route');
})

export default router;