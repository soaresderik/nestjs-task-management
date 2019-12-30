import React from 'react'
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
import { Heading } from '../common/styled-components';


const FormContainer = styled.form`
    max-width: 480px;
    width: 100%;
    padding: 30px;
    background-color: #edf4ff;
`;

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
