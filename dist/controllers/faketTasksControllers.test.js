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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
const request = supertest_1.default(app_1.default);
app_1.default.get('/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ message: 'pass!' });
}));
it('Gets the test endpoint', (done) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield request.get('/test');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('pass!');
    done();
}));
// const getAllTasks = async (): Promise<any | undefined> => {
//     try {
//         return await pool.query('SELECT * FROM tasks');
//     }catch (e) {
//         console.log(1, e)
//     }
// };
// export const getTasks = async (req: Request, res: Response): Promise <Response | undefined> => {
//     try {
//         let tasks: QueryResult = await getAllTasks();
//         if (tasks.rows.length < 1) return res.status(404).json({msg: 'Tasks does not exist!'});
//         return  res.status(200).json(tasks.rows)
//     } catch (e) {
//         return res.status(500).json({error2: e})
//     }
// };
//
// export const createTask = async (req: Request, res: Response):Promise <Response | undefined> => {
//     try {
//         const {text, priority} = req.body;
//         let response: QueryResult = await pool.query('INSERT INTO tasks (text, priority) VALUES ($1, $2)', [text, priority]);
//         return  res.status(200).json({
//             Msg: 'Task created successfully!',
//                 Task: {
//                     text,
//                     priority
//                 }
//             })
//     }catch (e) {
//         return res.status(500).json({error3: e})
//     }
// };
//
// export const getMostPriorityTask = async (req: Request, res: Response): Promise <Response | undefined> => {
//     try {
//         let tasks:QueryResult = await getAllTasks();
//         if (tasks.rows.length < 1) return res.status(404).json({msg: 'Tasks does not exist!'});
//
//         let priority = tasks.rows.map(task => task.priority);
//         let majorTask = tasks.rows.filter(task => task.priority >= Math.max(...priority));
//
//         return res.status(200).json({majorTask})
//     }catch (e) {
//         res.status(500).json({error4: e})
//     }
// };
//
// export const deleteTask = async (req: Request, res: Response): Promise<Response | undefined> => {
//     try {
//         let data:QueryResult = await getAllTasks();
//         let  id = parseInt(req.params.id);
//         let task:Array<any> = data.rows.filter(task => task.id == id);
//         if (task.length < 1){
//             return res.status(500).json({msg: `Tasks with id:${id} does not exist!`})
//         } else {
//             await pool.query(`DELETE FROM tasks WHERE id = ${id}`);
//             return res.status(200).json({msg: `Task ${id} delete successfully!`})
//         }
//     }catch (e) {
//         res.status(500).json({error5: e})
//     }
// };
//# sourceMappingURL=faketTasksControllers.test.js.map