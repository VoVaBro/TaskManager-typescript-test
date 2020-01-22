import React from 'react'


const TaskForm = ({changeHandler, addTask }) => {
    return (
        <div class="col l3">
            <input
                placeholder="Введите имя пользователя"
                id="username"
                type="text"
                name="username"
                className="yellow-input"
                onChange={changeHandler}
            />
            <input
                placeholder="Введите email"
                id="email"
                type="text"
                name="email"
                className="yellow-input"
                onChange={changeHandler}
            />
            <input
                placeholder="Введите задание"
                id="task"
                type="text"
                name="text"
                className="yellow-input"
                onChange={changeHandler}
            />
            <input
                placeholder="Введите статус"
                id="task"
                type="text"
                name="status"
                className="yellow-input"
                onChange={changeHandler}
            />
            <button
                className="btn teal lighten-3"
                onClick={addTask}
            >
                Создать задание
                </button>
        </div>
    )
}

export default TaskForm;