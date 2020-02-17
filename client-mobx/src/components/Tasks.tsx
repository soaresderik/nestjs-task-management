import * as React from "react";
import styled from "styled-components";
import { IconButton, Fab } from "@material-ui/core";
import { Add, ExitToApp } from "@material-ui/icons";
import { observer } from "mobx-react-lite";
import { GlobalProp } from "../interfaces";
import { TaskStatus } from "../store/interfaces";

// import Filter from "./Filter";
import TaskItem from "./TaskItem";
import { useStore } from "../store/context";

const Tasks: React.FC<GlobalProp> = observer(props => {
  const { taskStore, userStore } = useStore();
  const { getTasks } = taskStore;

  React.useEffect(() => {
    const fetchTasks = async () => {
      await getTasks({});
    }
    fetchTasks();
  }, [getTasks]);


  const onDelete = async (id: number) => {
    await taskStore.deleteTask(id);
  };

  const onUpdate = async (id: number, status: TaskStatus) => {
    // dispatch(await updateTask(id, status));
  };

  return (
    <TasksWrapper>
      <TaskHeader>
        <Title>Lista de Tarefas!</Title>
        <CreateButtonContainer>
          <Fab
            variant="extended"
            onClick={() => props.history?.push("/tasks/create")}
          >
            <Add />
            Criar
          </Fab>
        </CreateButtonContainer>

        <SignOutIconContainer>
          <IconButton onClick={() => userStore.logout() }>
            <ExitToApp />
          </IconButton>
        </SignOutIconContainer>
      </TaskHeader>
{/* 
      <Filter /> */}

      <TasksContainer>
        {taskStore.tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </TasksContainer>
    </TasksWrapper>
  );
});

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
