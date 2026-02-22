const express = require('express');
const taskRouter = express.Router();

taskRouter.get('/', (req, res) => {
    res.json([]);
})

taskRouter.post('/', (req, res) => {
    res.json({ message: 'Task added' });
})

module.exports = taskRouter;