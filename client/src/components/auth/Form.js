import React, { useContext } from 'react'
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
import { Heading, FormContainer } from '../common/styled-components';
import Error from '../common/Error';

import AlertContext from "../../context/alert/context";


const FormField = styled(TextField)`
    width: 100%
`

const Form = ({ onSubmit, onChange, title }) => {

    const alertContext = useContext(AlertContext);
    const { alerts } = alertContext;
    
    return (
        <FormContainer onSubmit={onSubmit}>
            <Heading>{title}</Heading>
            { !!alerts.length && alerts.map( err => <Error msg={err.msg} />) }
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
}

export default Form;
