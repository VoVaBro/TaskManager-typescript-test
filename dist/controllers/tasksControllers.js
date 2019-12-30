"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const getAllTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield database_1.pool.query('SELECT * FROM tasks');
    }
    catch (e) {
        console.log(1, e);
    }
});
exports.getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let tasks = yield getAllTasks();
        if (tasks.rows.length < 1)
            return res.status(404).json({ msg: 'Tasks does not exist!' });
        return res.status(200).json(tasks.rows);
    }
    catch (e) {
        return res.status(500).json({ error2: e });
    }
});
exports.createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { text, priority } = req.body;
        let response = yield database_1.pool.query('INSERT INTO tasks (text, priority) VALUES ($1, $2)', [text, priority]);
        return res.status(200).json({
            Msg: 'Task create successfully!',
            Task: {
                text,
                priority
            }
        });
    }
    catch (e) {
        return res.status(500).json({ error3: e });
    }
});
exports.getMostPriorityTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let tasks = yield getAllTasks();
        if (tasks.rows.length < 1)
            return res.status(404).json({ msg: 'Tasks does not exist!' });
        let priority = tasks.rows.map(task => task.priority);
        let majorTask = tasks.rows.filter(task => task.priority >= Math.max(...priority));
        return res.status(200).json({ majorTask });
    }
    catch (e) {
        res.status(500).json({ error4: e });
    }
});
exports.deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield getAllTasks();
        let id = parseInt(req.params.id);
        let task = data.rows.filter(task => task.id == id);
        if (task.length < 1) {
            return res.status(500).json({ msg: `Tasks with id:${id} does not exist!` });
        }
        else {
            yield database_1.pool.query(`DELETE FROM tasks WHERE id = ${id}`);
            return res.status(200).json({ msg: `Task ${id} delete successfully!` });
        }
    }
    catch (e) {
        res.status(500).json({ error5: e });
    }
});
//# sourceMappingURL=tasksControllers.js.map