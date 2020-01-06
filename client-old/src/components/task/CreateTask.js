
import React, { useState, useContext, useEffect } from 'react'
import { FormControl, TextField, Button } from "@material-ui/core";
import { FormContainer } from '../common/styled-components';
import TaskContext from "../../context/tasks/context";
import styled from "styled-components";


const FormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreateTask = (props) => {
    const taskContext = useContext(TaskContext);

    const { createTask } = taskContext;

    const [task, setTask] = useState({
        title: '',
        description: ''
    });

    const [sendRequest, setSend ] = useState(false);

    useEffect(() => {
        if (sendRequest){
            if(title === '' || description === '') return false;

            createTask({ title, description });

            setSend(false);
            props.history.push('/tarefas');
        }

    }, [sendRequest])

    const { title, description } = task;

    const onChange = e => setTask({...task, [e.target.name]: e.target.value });

    return (
        <FormWrapper>
            <FormContainer>
            <h1>Crie uma nova tarefa</h1>
            <p>Forneça informações sobre a tarefa que você deseja completar.</p>
                <FormControl fullWidth>
                    <TextField
                        label="Título"
                        name="title"
                        margin="normal"
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
                    variant="outlined"
                    name="description"
                    onChange={onChange}
                    />
                </FormControl>
                <Button
                    style={{ marginTop: '10px' }}
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={sendRequest}
                    onClick={() => setSend(true)}
                >
                    CRIAR
                </Button>
            </FormContainer>
        </FormWrapper>
    )
}

export default CreateTask
