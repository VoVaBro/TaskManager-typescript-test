const pool = require('../database/database')

const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/


const getAllTasks = async () => {
    try {
        return await pool.query('SELECT * FROM taskitem');
    } catch (e) {
        console.log(1, e)
    }
};


exports.createTask = async (req, res) => {
    try {

        let tasks = await getAllTasks();

        function genId() {
            if (tasks.rows.length < 1) {
                return tasks.rows.length + 1
            } else {
                let arrId = tasks.rows.map(task => task.id);
                let lastTask = tasks.rows.filter(task => task.id >= Math.max(...arrId));
                let id = JSON.parse(lastTask.map(tasks => tasks.id))
                return id + 1
            }
        }

        const id = genId();

        const { username, email, text, status } = req.body

        if (!reg.test(email)) {
            res.status(400).json({ status: 'error', message: 'Неверный email' })
        }
        if (username == null || username == '') {
            res.status(400).json({ status: 'error', message: 'Поле "Имя" является обязательным для заполнения' })
        } else if (text == null || text == '') {
            res.status(400).json({ status: 'error', message: 'Поле "Задание" является обязательным для заполнения' })
        }

        let response = await pool.query('INSERT INTO taskitem (username, email, text, status) VALUES ($1, $2, $3, $4)', [username, email, text, status]);

        return res.status(200).json({
            status: 'ok',
            message: {
                id,
                email,
                username,
                text,
                status
            }
        })
    } catch (err) {
        if (err) return res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
}


exports.getTasks = async (req, res) => {
    try {
        let tasks = await getAllTasks();
        if (tasks.rows.length < 1) return res.status(404).json({ msg: 'Tasks does not exist!' });
        return res.status(200).json({ status: 'ok', message: tasks.rows, total_task_count: tasks.rows.length })
    } catch (err) {
        return res.status(500).json({ error2: err.message })
    }
};









