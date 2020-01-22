import React, { useContext, useState, useEffect, useCallback } from "react";
import { useHttp } from '../hooks/http.hook'
import TasksList from './TasksList'
import TasksPagination from './TaskPagination'
import TaskForm from './TaskForm'
import { useMessage } from '../hooks/message.hook'


const TasksPage = () => {

    const [taskform, setTaskForm] = useState({
        username: '',
        email: '',
        text: '',
        status: ''
    })

    const [task, setTask] = useState([
        {
            id: '',
            username: '',
            email: 'В базе заданий нет!',
            text: 'Создайте новое задание !',
            status: ''
        }
    ])

    const { loading, request, error, clearError } = useHttp()
    const message = useMessage()


    const [load, setLoading] = useState(false);
    const [currentPage, setPage] = useState(1);
    const [tasksPerPage, setPerPage] = useState(3);


    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTask = task.slice(indexOfFirstTask, indexOfLastTask);

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])


    const fetchTasks = useCallback(async () => {
        setLoading(true);
        let res = await request('/tasks/gettasks', 'GET', null, {})

            let newtask = res.message.map(t => {
            return {
                id: t.id,
                username: t.username,
                email: t.email,
                text: t.text,
                status: t.status
            }
        })
        setTask([...task, ...newtask])
        setLoading(false) 

      
    }, [request]);



    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);


    const addTask = async () => {
        try {
            let data = await request('/tasks/create', 'POST', { ...taskform })
            setTask([...task, data.message])
        } catch (e) { }
    }

    const changeHandler = (e) => {
        setTaskForm({ ...taskform, [e.target.name]: e.target.value })
    }


    const paginate = (pageNumber) => setPage(pageNumber)


   

    return (
        <div class="row">

            <div class="col l7">
                <TasksList
                    task={currentTask}
                    loading={load}
                />

            </div>
            <div class="col l1">
                <TasksPagination
                    taskPerPage={tasksPerPage}
                    totalTasks={task.length}
                    paginate={paginate}
                />
            </div>
            <TaskForm
                addTask={addTask}
                changeHandler={changeHandler}
            />
        </div>
    )
}

export default TasksPage;
