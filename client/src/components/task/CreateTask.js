
import React, { useState } from 'react'
import { FormControl, TextField, Button } from "@material-ui/core";
import { FormContainer } from '../common/styled-components';
import styled from "styled-components";


const FormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreateTask = () => {

    const [task, setTask] = useState({
        title: '',
        description: ''
    });

    const { title, description } = task;

    const onChange = e => setTask({...task, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        return;
    }

    return (
        <FormWrapper>
            <FormContainer>
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
                    onClick={onSubmit}
                >
                    CRIAR
                </Button>
            </FormContainer>
        </FormWrapper>
    )
}

export default CreateTask
