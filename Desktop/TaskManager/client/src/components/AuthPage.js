import React, {useState, useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'




const AuthPage = () => {

  const history = useHistory()

  const auth = useContext(AuthContext)

  const message = useMessage()

  const{loading, request, error, clearError} = useHttp()
  const [form, setForm] = useState({username: '', password: ''})

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  },[])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try{
      const data = await request('/users/signup', 'POST', {...form})
      history.push('/')
    }catch(e){}
  }

  const loginHandler = async () => {
    try{
      const data = await request('/users/login', 'POST', {...form})
      auth.login(data.token, data.userId)
      history.push('/')
    }catch(e){}
  }
 
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Hello !!!</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>

            <div className="input-field">
                <input
                  placeholder="Введите имя пользователя"
                  id="username"
                  type="text"
                  name="username"
                  className="yellow-input"
                  onChange={changeHandler}
                />
                </div>

                <div className="input-field">
                <input
                  placeholder="Введите пароль"
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input"
                  onChange={changeHandler}
                />
                </div>
      
          </div>
          <div className="card-action">
            <button
              className="btn red lighten-1"
              style={{marginRight: 10}}
              disabled={loading}
              onClick={loginHandler}
            >
              Войти
            </button>
            <button
              className="btn teal lighten-3"
              onClick={registerHandler}
              disabled={loading}
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage;