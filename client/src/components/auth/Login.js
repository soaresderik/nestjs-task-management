import React, { useState, useContext, useEffect } from 'react'
import AuthContext from "../../context/auth/context";
import Form from './Form';
import { FullScreenWrapper } from "../common/styled-components";
import { useSnackbar } from "notistack";

const Login = props => {
    const authContext = useContext(AuthContext);
    const { enqueueSnackbar } = useSnackbar();

    const { login, isAuthenticated, error } = authContext;

    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const { username, password } = user;

    useEffect(() => {
        if(isAuthenticated)
            props.history.push('/tarefas');

        if(error) enqueueSnackbar(error, {
            variant: 'error',
        });

    }, [isAuthenticated, props.history, error])

    const onSubmit = e => {
        e.preventDefault();

        if (username === '' || password === '') {
            enqueueSnackbar("Nome e senha são obrigatórios!", {
                variant: 'error',
            });
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
