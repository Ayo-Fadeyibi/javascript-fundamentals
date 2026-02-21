const express = require('express');
const taskRouter = express.Router();

taskRouter.get('/tasks', (req, res) => {
    res.send('Tasks route');
})

export default taskRouter;