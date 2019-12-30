import React from 'react'
import { Card, CardContent } from "@material-ui/core";

const TaskItem = ({ task }) => {
    return (
        <Card>
            <CardContent>
                <h3>{ task.title }</h3>
                <p>{ task.description }</p>
            </CardContent>
        </Card>
    )
}

export default TaskItem
