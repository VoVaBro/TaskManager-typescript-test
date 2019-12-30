import { Router } from 'express';
const router = Router();

import { getTasks, createTask, getMostPriorityTask, deleteTask } from "../controllers/tasksControllers";

router.get('/tasks/getall', getTasks);
router.get('/tasks/getmajortask', getMostPriorityTask);
router.post('/tasks/addtask', createTask );
router.delete('/tasks/deletetask/:id', deleteTask);

export default router;