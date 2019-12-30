import React, { useState, useContext, useEffect } from 'react'
import AuthContext from "../../context/auth/context";

const Login = props => {
    const authContext = useContext(AuthContext);

    const { login, isAuthenticated } = authContext;

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const { username, password } = user;

    useEffect(() => {
        if(isAuthenticated)
            props.history.push('/tarefas');

    }, [isAuthenticated, props.history])

    const onSubmit = e => {
        e.preventDefault();

        if(username == '' || password == '') return false;

        login({
            username,
            password
        })
    }

    const onChange = e => setUser({...user, [e.target.name]: e.target.value });
    return (
        <div>
            <h3>Entrar</h3>
            <form onSubmit={onSubmit}>
                <input id="username" type="text" name="username" onChange={onChange} required />
                <input id="password" type="password" name="password"onChange={onChange} required />
                <input type="submit" value="Entrar"/>
            </form>
        </div>
    )
}

export default Login
