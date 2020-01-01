import React, { useState, useContext, useEffect } from 'react'
import AuthContext from "../../context/auth/context";
import AlertContext from "../../context/alert/context";
import Form from './Form';
import { FullScreenWrapper } from "../common/styled-components";

const Login = props => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    const { login, isAuthenticated } = authContext;
    const { setAlert } = alertContext;

    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const { username, password } = user;

    useEffect(() => {
        if(isAuthenticated)
            props.history.push('/tarefas');

    }, [isAuthenticated, props.history])

    const onSubmit = e => {
        e.preventDefault();

        if (username === '' || password === '') {
            setAlert("Nome e senha são obrigatórios!" );
            return;
        }

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
