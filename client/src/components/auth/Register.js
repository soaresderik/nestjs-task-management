import React, { useState, useContext, useEffect } from 'react'
import AuthContext from "../../context/auth/context";
import Form from './Form';

const Register = (props) => {
    const authContext = useContext(AuthContext);

    const { signUp, isAuthenticated } = authContext;

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const { username, password } = user;

    useEffect(() => {
        if(isAuthenticated)
            props.history.push('/tarefas');

    }, [isAuthenticated, props.history])

    const onSubmit = async e => {
        e.preventDefault();

        if(username == '' || password == '') return false;

        try {
            await signUp({
                username,
                password
            })

            props.history.push('/login');

        }  catch (err) {
            return;
        }
    }

    const onChange = e => setUser({...user, [e.target.name]: e.target.value });
    return (
        <div>
            <h1>Cadastre-se</h1>
            <Form onSubmit={onSubmit} onChange={onChange} />
        </div>
    )
}

export default Register;
