const express = require('express');
const taskRouter = express.Router();
const { taskArray } = require('../data/store');

taskRouter.get('/', (req, res) => {
    res.json(taskArray);
})

taskRouter.post('/', (req, res) => {
    const { title} = req.body;
    const id = Date.now();
    taskArray.push({ title, id });
    res.json({ message: 'Task added' });
})

taskRouter.route('/:id')
    .delete((req, res) => {
        const { id } = req.params;
        const index = taskArray.findIndex(task => task.id === parseInt(id));
        if (index !== -1) {
            taskArray.splice(index, 1);
            res.json({ message: 'Task deleted' });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    })

module.exports = taskRouter;