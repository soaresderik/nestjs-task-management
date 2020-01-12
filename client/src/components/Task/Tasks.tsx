import * as React from "react";
import styled from "styled-components";
import { IconButton, Fab } from "@material-ui/core";
import { Add, ExitToApp } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth/auth.actions";
import { GlobalProp } from "../interfaces";
import { TaskState } from "../../store/interfaces";

import Filter from "./Filter";
import TaskItem from "./TaskItem";

const Tasks: React.FC<GlobalProp> = props => {
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
            onClick={() => props.history.push("/tarefas/criar")}
          >
            <Add />
            Criar
          </Fab>
        </CreateButtonContainer>

        <SignOutIconContainer>
          <IconButton onClick={onClick}>
            <ExitToApp />
          </IconButton>
        </SignOutIconContainer>
      </TaskHeader>

      <Filter />

      <TasksContainer>
        {tasks.tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </TasksContainer>
    </TasksWrapper>
  );
};

const TasksWrapper = styled.div`
  width: 100%;
  max-width: 860px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
`;

const TasksContainer = styled.div`
  padding-top: 20px;
`;

const TaskHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 3px solid #757c87;
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

export default Tasks;
