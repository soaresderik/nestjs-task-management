import * as React from "react";
import { FullScreenWrapper } from "../Common/styled-components";

import Form from "./Form";

const Signup = (props: any) => {
    const [user, setUser] = React.useState({
        username: "",
        password: ""
    });

    const { username, password } = user;

    const onSubmit = async (e: any) => {
        e.preventDefault();

        if (username === "" || password === "") return;

        return;
    };

    const onChange = (e: any) =>
        setUser({ ...user, [e.target.name]: e.target.value });

    return (
        <FullScreenWrapper>
            <Form
                title="Cadastre-se"
                subtitle="Começe a gerenciar tarefas de forma fácil!"
                footer="Ja tem uma conta? clique aqui para entrar."
                onChange={onChange}
                onSubmit={onSubmit}
                onClick={() => props.history.push("/login")}
            />
        </FullScreenWrapper>
    );
};

export default Signup;
