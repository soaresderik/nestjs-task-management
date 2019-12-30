import React, { useState, useContext, useEffect } from 'react'
import AuthContext from "../../context/auth/context";
import Form from './Form';
import { Heading, FullScreenWrapper } from "../common/styled-components";

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

        if(username === '' || password === '') return false;

        login({
            username,
            password
        })
    }

    const onChange = e => setUser({...user, [e.target.name]: e.target.value });
    return (
        <FullScreenWrapper>
            <Form title="Entrar" onSubmit={onSubmit} onChange={onChange} />
        </FullScreenWrapper>
    )
}

export default Login
