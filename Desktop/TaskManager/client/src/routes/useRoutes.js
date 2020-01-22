import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CreateTask from '../components/CreateTask'
import TasksPage from '../components/TasksPage'
import AuthPage from '../components/AuthPage'
import TaskConfig from '../components/TaskConfig'



const useRoutes = isAuth => {
    if (!isAuth) {
        return (
            <Switch>
                <Route path="/" exact component={TasksPage}/>
                <Route path="/sign" component={AuthPage} />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact component={TasksPage} />
            <Route path="/config" component={TaskConfig} />
        </Switch>
    )
}

export default useRoutes;