import * as React from "react";
import styled from "styled-components";
import {
    IconButton,
    FormControl,
    TextField,
    InputAdornment,
    Select,
    MenuItem,
    Fab,
    Grid,
    Icon
} from "@material-ui/core";
import { Search, Add, ExitToApp } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/auth/auth.actions";
import { TaskState } from "../../store/interfaces";

const ControlContainer = styled.div`
    background-color: #c0cde0;
    border-radius: 5px;
    padding: 10px;
`;

const TasksWrapper = styled.div`
    width: 100%;
    max-width: 860px;
    margin: auto;
    padding: 20px;
    box-sizing: border-box;
`;

const TaskHeader = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 3px solid #757c87;
`;

const FilterContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    max-width: 860px;
`;

const CreateButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Title = styled.h1`
    width: 100%;
    color: #edf4ff;
`;

const SignOutIconContainer = styled.div`
    margin-left: 10px;
`;

const Tasks = (props: any) => {
    const tasks = useSelector((state: any) => state.tasks) as TaskState;
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(logout());
    };

    return (
        <TasksWrapper>
            <TaskHeader>
                <Title>Lista de Tarefas!</Title>
                <CreateButtonContainer>
                    <Fab
                        variant="extended"
                        onClick={() => props.history.push("/tasks/create")}
                    >
                        <Add />
                        Criar
                    </Fab>
                </CreateButtonContainer>

                <SignOutIconContainer>
                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </SignOutIconContainer>
            </TaskHeader>

            <FilterContainer>
                <Grid container spacing={1} justify="space-around">
                    <Grid item xs={8}>
                        <ControlContainer>
                            <FormControl fullWidth>
                                <TextField
                                    placeholder="Pesquisar..."
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Search />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </FormControl>
                        </ControlContainer>
                    </Grid>

                    <Grid item xs={3}>
                        <ControlContainer>
                            <FormControl fullWidth>
                                <Select displayEmpty>
                                    <MenuItem value="">
                                        Nenhum status selecionado
                                    </MenuItem>
                                    <MenuItem value={"OPEN"}>Aberta</MenuItem>
                                    <MenuItem value={"IN_PROGRESS"}>
                                        Em progresso
                                    </MenuItem>
                                    <MenuItem value={"DONE"}>
                                        Finalizada
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </ControlContainer>
                    </Grid>
                </Grid>
            </FilterContainer>
        </TasksWrapper>
    );
};

export default Tasks;
