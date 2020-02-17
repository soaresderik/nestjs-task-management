import * as React from "react";
import {
  FormWrapper,
  FormContainer,
  Header
} from "../common/components";
import { FormControl, TextField, Button } from "@material-ui/core";
import { GlobalProp } from "../interfaces";
import { observer } from "mobx-react-lite";
import { useStore } from "../store/context";

const CreateTask: React.FC<GlobalProp> = observer(props => {
  const { taskStore } = useStore();
  const [task, setTask] = React.useState({
    title: "",
    description: ""
  });

  const { title, description } = task;

  const onChange = (e: any) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const onSubmit = async (e: any) => {
    if (!title.length || !description.length) {
      return;
    }

    taskStore.createTask(title, description);

    props.history?.push("/tasks");
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
          onClick={() => props.history?.push("/tasks")}
        >
          Voltar
        </Button>
      </FormContainer>
    </FormWrapper>
  );
});

export default CreateTask;
