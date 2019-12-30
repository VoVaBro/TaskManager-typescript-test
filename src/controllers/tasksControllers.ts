import {Request, Response} from 'express';
import {QueryResult} from 'pg';

import {pool} from "../database";

const getAllTasks = async (): Promise<any | undefined> => {
    try {
        return await pool.query('SELECT * FROM tasks');
    }catch (e) {
        console.log(1, e)
    }
};

export const getTasks = async (req: Request, res: Response): Promise <Response | undefined> => {
    try {
        let tasks: QueryResult = await getAllTasks();
        if (tasks.rows.length < 1) return res.status(404).json({msg: 'Tasks does not exist!'});
        return  res.status(200).json(tasks.rows)
    } catch (e) {
        return res.status(500).json({error2: e})
    }
};

export const createTask = async (req: Request, res: Response):Promise <Response | undefined> => {
    try {
        const {text, priority} = req.body;
        let response: QueryResult = await pool.query('INSERT INTO tasks (text, priority) VALUES ($1, $2)', [text, priority]);
        return  res.status(200).json({
            Msg: 'Task create successfully!',
                Task: {
                    text,
                    priority
                }
            })
    }catch (e) {
        return res.status(500).json({error3: e})
    }
};

export const getMostPriorityTask = async (req: Request, res: Response): Promise <Response | undefined> => {
    try {
        let tasks:QueryResult = await getAllTasks();
        if (tasks.rows.length < 1) return res.status(404).json({msg: 'Tasks does not exist!'});

        let priority = tasks.rows.map(task => task.priority);
        let majorTask = tasks.rows.filter(task => task.priority >= Math.max(...priority));

        return res.status(200).json({majorTask})

    }catch (e) {
        res.status(500).json({error4: e})
    }
};

export const deleteTask = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        let data:QueryResult = await getAllTasks();
        let  id = parseInt(req.params.id);
        let task:Array<any> = data.rows.filter(task => task.id == id);
        if (task.length < 1){
            return res.status(500).json({msg: `Tasks with id:${id} does not exist!`})
        } else {
            await pool.query(`DELETE FROM tasks WHERE id = ${id}`);
            return res.status(200).json({msg: `Task ${id} delete successfully!`})
        }
    }catch (e) {
        res.status(500).json({error5: e})
    }
};


