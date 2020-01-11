import * as React from "react";
import {
  FormWrapper,
  FormContainer,
  Header
} from "../Common/styled-components";
import { FormControl, TextField, Button } from "@material-ui/core";
import { GlobalProp } from "../interfaces";

const CreateTask: React.FC<GlobalProp> = props => {
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
            variant="outlined"
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Descrição"
            placeholder="Descrição"
            multiline
            rows="8"
            margin="normal"
            variant="outlined"
          />
        </FormControl>

        <Button
          fullWidth
          color="primary"
          variant="contained"
          style={{ marginTop: "10px" }}
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
