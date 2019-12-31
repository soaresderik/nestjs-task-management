import React from 'react'
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
import { Heading, FormContainer } from '../common/styled-components';


const FormField = styled(TextField)`
    width: 100%
`

const Form = ({ onSubmit, onChange, title }) => (
    <FormContainer onSubmit={onSubmit}>
        <Heading>{title}</Heading>
        <div>
            <FormField 
                id="outlined-name" 
                label="Username" 
                type="text" 
                name="username" 
                autoComplete="off"
                onChange={onChange} 
            />
        </div>
        <div>
            <FormField
                id="outlined-name"
                label="Senha"
                type="password" 
                name="password"
                onChange={onChange} 
            />
        </div>
        <br/>
        <div>
            <Button 
                fullWidth
                type="submit"
                color="primary"
                variant="contained"
            >Entrar</Button>
        </div>
        
    </FormContainer>
);

export default Form;
