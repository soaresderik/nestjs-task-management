import React from 'react'
import { Card, CardContent } from "@material-ui/core";
import styled from "styled-components";

const TaskContainer = styled.div`
    padding-top: 20px;
`

const TaskItem = ({ task }) => {
    return (
        <TaskContainer>
        <Card>
            <CardContent>
                <h3>{ task.title }</h3>
                <p>{ task.description }</p>
            </CardContent>
        </Card>
        </TaskContainer>
    )
}

export default TaskItem
