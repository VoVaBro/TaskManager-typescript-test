import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'





const TasksList = ({ task, loading }) => {

    const auth = useContext(AuthContext)


    const [state, setState] = useState(false)


    const handleInputChange = (e) => {
        const { target } = e;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        
        // id:  console.log(e.currentTarget.id)


        setState( f => ({ ...f, [name]: value }));

        };


    if (loading ) {
        return <h2>Loading...</h2>
    }


    if (!auth.isAuth) {
        return (
            <div class="col s9">
                {task.map(i => (
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <p>{i.username}</p>
                            <p>{i.email}</p>
                            <hr />
                            <p>{i.text}</p>
                            <br />
                            <p>Status: {i.status}</p>
                            <br />
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div class="col s9">
            {task.map(i => (
                <div key={i.id} class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <p>{i.username}</p>
                        <p>{i.email}</p>
                        <hr />
                        <p>{i.text}</p>
                        <br />
                        <p>Status: {i.status}</p>
                        <br />
                        <label>
                            <input type="checkbox" id={i.id} class="filled-in" checked={state.isChecked} onChange={handleInputChange}/>
                            <span>Выполнено</span>
                        </label>
                    </div>
                </div>
            ))}
        </div>
    )
}




export default TasksList;