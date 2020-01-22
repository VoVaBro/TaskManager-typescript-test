import React, { useContext } from 'react'
import { NavLink, useHistory, Switch } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

    const history = useHistory()
    const auth = useContext(AuthContext)


    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    

    if (!auth.isAuth) {
        return (
            <nav>
                <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
                    <span className="brand-logo">
                        <NavLink to="/">
                            Task Manager
                        </NavLink>
                    </span>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/sign" >Войти</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    } 
        return (
            <nav>
                <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
                    <span className="brand-logo">
                        <NavLink to="/">
                            Task Manager
                        </NavLink>
                    </span>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/config"></NavLink></li>
                        <li><NavLink to="/" onClick={logoutHandler}>Выйти</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    
}

export default Navbar;