
import {Request, Response} from 'express';
import {QueryResult} from 'pg';

import {pool} from "../database";


 const functions = {

        getTasks: async(req: Request, res: Response): Promise<Response | undefined> => {
        let tasks: QueryResult = await pool.query('SELECT * FROM tasks');
        if (tasks.rows.length < 1) return res.status(404).json({msg: 'Tasks does not exist!'});
        return res.status(200).json({message: 'Successfully!', Tasks: tasks.rows})
    },
        createTask: async (req: Request, res: Response): Promise<Response | undefined> => {
        let newTask = {
            text: 'New task',
            priority: 60
        };
        let {text, priority} = newTask;
        await pool.query(`INSERT INTO tasks (text, priority) VALUES (${text}, ${priority})`);
        return res.status(200).json({
            message: 'Task created successfully!',
            Task: {
                text,
                priority
            }
        })
    },

//  const getMostPriorityTask = async (req: Request, res: Response): Promise <Response | undefined> => {
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
//  const deleteTask = async (req: Request, res: Response): Promise<Response | undefined> => {
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

};

 export default functions;




