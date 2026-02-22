const express = require('express');
const taskRouter = express.Router();

taskRouter.get('/', (req, res) => {
    res.json([]);
})

module.exports = taskRouter;