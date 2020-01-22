import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import useRoutes  from './routes/useRoutes'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import  Navbar  from './components/Navbar'


import 'materialize-css'


function App() {


  const { token, login, logout, userId } = useAuth()
  const isAuth = !!token
  const routes = useRoutes(isAuth)


  return (
    <AuthContext.Provider value={{ token, logout, login, userId, isAuth }}>
      <Router>
       <Navbar /> 
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
