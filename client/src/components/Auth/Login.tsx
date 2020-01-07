import * as React from "react";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/auth/auth.actions";
import { AuthState } from "../../store/interfaces";
import { FullScreenWrapper } from "../Common/styled-components";

const Login = (props: any) => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(
        (state: any) => state.auth
    ) as AuthState;

    const [user, setUser] = React.useState({
        username: "",
        password: ""
    });

    const { username, password } = user;

    React.useEffect(() => {
        if (isAuthenticated) props.history.push("/tarefas");

        // if(error) enqueueSnackbar(error, {
        //     variant: 'error',
        // });
    }, [isAuthenticated]);

    const onSubmit = async (e: any) => {
        e.preventDefault();

        if (username === "" || password === "") return;

        dispatch(await signIn({ username, password }));
        return;
    };

    const onChange = (e: any) =>
        setUser({ ...user, [e.target.name]: e.target.value });

    return (
        <FullScreenWrapper>
            <Form
                subtitle="Digite seu usuário e senha para logar."
                title="Entrar"
                footer="Ainda não tem uma conta? clique aqui para criar."
                onSubmit={onSubmit}
                onChange={onChange}
                onClick={() => props.history.push("/cadastrar")}
            />
        </FullScreenWrapper>
    );
};

export default Login;
