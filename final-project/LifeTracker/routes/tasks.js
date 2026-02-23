const express = require('express');
const taskRouter = express.Router();
const { taskArray } = require('../data/store');

taskRouter.get('/', (req, res) => {
    res.json(taskArray);
})

taskRouter.post('/', (req, res) => {
    const { title } = req.body;
    taskArray.push({ title });
    res.json({ message: 'Task added' });
})

module.exports = taskRouter;