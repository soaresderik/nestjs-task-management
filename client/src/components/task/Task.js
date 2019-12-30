import React, { useEffect, useContext, Suspense } from 'react'
import TaskContext from "../../context/tasks/context";
import TaskItem from './TaskItem';
import Loading from '../common/Loading';

const Task = () => {
    const taskContext = useContext(TaskContext);

    const { getTasks, tasks } = taskContext;

    useEffect(() => {
        getTasks()
    }, [])

    if (!tasks.length) return <Loading />

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <Suspense fallback={<h1>Carregando...</h1>}>
                { tasks.map(task => <TaskItem key={task.id} task={task} />) }
            </Suspense>
        </div>
    )
}

export default Task
