"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const tasksControllers_1 = require("../controllers/tasksControllers");
router.get('/tasks/getall', tasksControllers_1.getTasks);
router.get('/tasks/getmajortask', tasksControllers_1.getMostPriorityTask);
router.post('/tasks/addtask', tasksControllers_1.createTask);
router.delete('/tasks/deletetask/:id', tasksControllers_1.deleteTask);
exports.default = router;
//# sourceMappingURL=routes.js.map