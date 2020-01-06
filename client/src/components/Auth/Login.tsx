import * as React from "react";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/auth/auth.actions";

const Login = (props: any) => {
    const dispatch = useDispatch();
    const global = useSelector(state => state);

    const [user, setUser] = React.useState({
        username: "",
        password: "",
    });

    const { username, password } = user;

    React.useEffect(() => {
        // if(isAuthenticated)
        //     props.history.push('/tarefas');

        // if(error) enqueueSnackbar(error, {
        //     variant: 'error',
        // });

    }, [global]);

    const onSubmit = async (e: any) => {
        e.preventDefault();

        if (username === "" || password === "")
            return;

        dispatch(await signIn({ username, password }));
        return;
    };

    const onChange = (e: any) => setUser({...user, [e.target.name]: e.target.value });
    return (
        <div>
            <Form title="Entrar" onSubmit={onSubmit} onChange={onChange} />
        </div>
    );
};

export default Login;