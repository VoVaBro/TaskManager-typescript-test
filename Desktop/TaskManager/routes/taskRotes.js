const router = require('express').Router();
const { createTask, getTasks } = require('../config/tasksConfig');

// tasks/
router.post('/create', createTask);
router.get('/gettasks', getTasks);


module.exports = router;