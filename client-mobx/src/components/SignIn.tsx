import * as React from "react";
import Form from "./Form";
import { FullScreenWrapper } from "../common/components";
import { useStore } from "../store/context";
import { observer } from "mobx-react-lite";
import { GlobalProp } from "../interfaces";

const SignIn: React.FC<GlobalProp> = observer((({ history }) => {
  const { userStore } = useStore();

  const [user, setUser] = React.useState({
    username: "",
    password: ""
  });

  const { username, password } = user;
  const { signed } = userStore;

  React.useEffect(() => {
    if (signed) history?.push("/tasks");
  }, [signed, history]);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (username === "" || password === "") {
      return;
    }

    await userStore.signIn({ username, password })
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
        onClick={() => history?.push("/signup")}
      />
    </FullScreenWrapper>
  );
}));

export default SignIn;
