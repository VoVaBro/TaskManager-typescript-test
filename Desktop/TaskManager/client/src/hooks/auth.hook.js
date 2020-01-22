import {useState, useCallback, useEffect} from 'react'


 

export const useAuth = () => {

    const [token, setToken] = useState(null)
    const [userId, setUserID] = useState (null)

    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserID(id)
        localStorage.setItem('auth', JSON.stringify({token: jwtToken, userId: id}))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserID(null)
        localStorage.removeItem('auth')
    }, [])

useEffect(() => {
    const data = JSON.parse(localStorage.getItem('auth'))
    if (data && data.token) {

        login(data.token, data.userId)
    }
}, [login])

    return{ login, logout, token, userId }
}