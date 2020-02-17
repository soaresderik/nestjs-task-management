import * as React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { FormField, Heading } from "../common/components";

const FormContainer = styled.form`
    max-width: 480px;
    width: 100%;
    padding: 30px;
    background-color: #edf4ff;
`;

interface FormProp {
    title: string;
    subtitle: string;
    footer: string;
    onSubmit: (e: any) => void;
    onChange: (e: any) => void;
    onClick: (e: any) => void;
}

const Form = ({
    title,
    subtitle,
    onSubmit,
    onChange,
    footer,
    onClick
}: FormProp) => {
    return (
        <FormContainer onSubmit={onSubmit}>
            <Heading>{title}</Heading>
            <p>{subtitle}</p>
            <div>
                <FormField
                    id="outlined-name"
                    label="Usuário"
                    type="text"
                    name="username"
                    margin="dense"
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
            <br />
            <div>
                <Button
                    fullWidth
                    type="submit"
                    color="primary"
                    variant="contained"
                >
                    Entrar
                </Button>
            </div>
            <div>
                <Button fullWidth onClick={onClick}>
                    {footer}
                </Button>
            </div>
        </FormContainer>
    );
};

export default Form;
