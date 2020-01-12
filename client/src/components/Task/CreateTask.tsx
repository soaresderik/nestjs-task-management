import * as React from "react";
import {
  FormWrapper,
  FormContainer,
  Header
} from "../Common/styled-components";
import { FormControl, TextField, Button } from "@material-ui/core";
import { GlobalProp } from "../interfaces";
import { useDispatch } from "react-redux";
import { createTask } from "../../store/tasks/tasks.actions";

const CreateTask: React.FC<GlobalProp> = props => {
  const dispatch = useDispatch();
  const [task, setTask] = React.useState({
    title: "",
    description: ""
  });

  const { title, description } = task;

  const onChange = (e: any) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const onSubmit = async (e: any) => {
    if (!title.length || !description.length) return;

    dispatch(await createTask(title, description));

    props.history.push("/tarefas");
  };

  return (
    <FormWrapper>
      <FormContainer>
        <Header>
          <h1>Criar Tarefa!</h1>
          <p>Forneça as infomações da tarefa ue você deseja completar.</p>
        </Header>

        <FormControl fullWidth>
          <TextField
            label="Título"
            placeholder="Título"
            margin="normal"
            name="title"
            variant="outlined"
            onChange={onChange}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Descrição"
            placeholder="Descrição"
            multiline
            rows="8"
            margin="normal"
            name="description"
            variant="outlined"
            onChange={onChange}
          />
        </FormControl>

        <Button
          fullWidth
          color="primary"
          variant="contained"
          style={{ marginTop: "10px" }}
          onClick={onSubmit}
        >
          Criar
        </Button>

        <Button
          fullWidth
          variant="contained"
          style={{ marginTop: "10px" }}
          onClick={() => props.history.push("/tarefas")}
        >
          Voltar
        </Button>
      </FormContainer>
    </FormWrapper>
  );
};

export default CreateTask;
