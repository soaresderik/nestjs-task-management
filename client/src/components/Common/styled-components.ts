import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const Heading = styled.h1`
    margin-top: 0;
`;

export const FullScreenWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const FormContainer = styled.form`
    max-width: 480px;
    width: 100%;
    padding: 30px;
    background-color: #edf4ff;
`;

export const FormField = styled(TextField)`
    width: 100%;
`;
