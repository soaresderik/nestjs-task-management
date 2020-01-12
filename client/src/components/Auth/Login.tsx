import * as React from "react";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { signIn, loadUser } from "../../store/auth/auth.actions";
import { AuthState } from "../../store/interfaces";
import { FullScreenWrapper } from "../Common/styled-components";
import { useSnackbar } from "notistack";

const Login = (props: any) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { isAuthenticated, error } = useSelector(
    (state: any) => state.auth
  ) as AuthState;

  const [user, setUser] = React.useState({
    username: "",
    password: ""
  });

  const { username, password } = user;

  React.useEffect(() => {
    if (isAuthenticated) props.history.push("/tarefas");

    dispatch(loadUser());

    if (error)
      enqueueSnackbar(error, {
        variant: "error"
      });
  }, [isAuthenticated, error]);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (username === "" || password === "") {
      enqueueSnackbar("Nome e senha são obrigatórios", {
        variant: "error"
      });

      return;
    }

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
