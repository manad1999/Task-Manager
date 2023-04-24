const express = require('express');
const {getAlltasks,getTasks,createTask, updateTasks, deleteTasks} = require("../Controllers/tasks");
const router = express.Router();


router.route('/').get(getAlltasks).post(createTask);
router.route('/:id').get(getTasks).patch(updateTasks).delete(deleteTasks);


module.exports  = router;

