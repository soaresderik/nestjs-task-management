import React from 'react'
import { Card, CardContent,
        CardActions, Grid,
        FormControl, Select,
        MenuItem, IconButton
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import styled from "styled-components";

const TaskContainer = styled.div`
    padding-top: 20px;
`

const TaskItem = ({ task, deleteTask }) => {

    const handleDelete = id => {
        if (!(window.confirm("Deseja Realmente excluir essa tarefa?")))
            return false;
        
        deleteTask(id);
    }

    return (
        <TaskContainer>
        <Card>
            <CardContent>
                <h3>{ task.title }</h3>
                <p>{ task.description }</p>
            </CardContent>
            <CardActions style={{ padding: '14px' }} disableSpacing>
                <Grid justify="space-between" container>
                    <Grid item>
                        <FormControl style={{ width: '140px' }}>
                            <Select
                                value={task.status}
                                displayEmpty
                            >
                                <MenuItem value={'OPEN'}>Aberta</MenuItem>
                                <MenuItem value={'IN_PROGRESS'}>Em Progresso</MenuItem>
                                <MenuItem value={'DONE'}>Finalizada</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item>
                        <IconButton onClick={() => handleDelete(task.id)}>
                            <Delete color="error" />
                        </IconButton>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
        </TaskContainer>
    )
}

export default TaskItem
