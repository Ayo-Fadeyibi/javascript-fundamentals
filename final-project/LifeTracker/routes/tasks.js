const express = require('express');
const taskRouter = express.Router();

taskRouter.get('/', (req, res) => {
    res.send('Tasks route');
})

module.exports = taskRouter;