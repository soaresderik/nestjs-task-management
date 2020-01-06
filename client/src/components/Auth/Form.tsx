import * as React from "react";
import { TextField, Button } from "@material-ui/core";

interface FormProp {
    title: string;
    onSubmit: (e: any) => void;
    onChange: (e: any) => void;
}

const Form = ({ title, onSubmit, onChange }: FormProp) => {

    return (
        <form onSubmit={onSubmit}>
            <h2>{title}</h2>
            <div>
                <TextField
                    id="outlined-name"
                    label="Username"
                    type="text"
                    name="username"
                    autoComplete="off"
                    onChange={onChange}
                />
            </div>
            <div>
                <TextField
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
        </form>
    );
};

export default Form;