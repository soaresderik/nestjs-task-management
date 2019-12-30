import React, { useEffect, useContext } from 'react'
import styled from "styled-components";

import TaskContext from "../../context/tasks/context";
import TaskItem from './TaskItem';
import Loading from '../common/Loading';

const TaskWrapper = styled.div`
    width: 100%;
    margin: auto;
    max-width: 850px;
    padding: 20px;
    box-sizing: border-box;
`;

const Task = () => {
    const taskContext = useContext(TaskContext);

    const { getTasks, tasks } = taskContext;

    useEffect(() => {
        getTasks()
    }, [])


    return (
        <TaskWrapper>
            <h1>Lista de Tarefas</h1>
            {!tasks.length ? <h3>Você ainda não tem nenhuma tarefa.</h3> 
            : tasks.map(task => <TaskItem key={task.id} task={task} />) }
        </TaskWrapper>
    )
}

export default Task
