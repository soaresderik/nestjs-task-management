import * as React from "react";
import { ITask, TaskStatus } from "../../store/interfaces";
import styled from "styled-components";
import {
  Card,
  CardContent,
  CardActions,
  Grid,
  FormControl,
  Select,
  MenuItem,
  IconButton
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const CardContainer = styled.div`
  margin-bottom: 20px;
`;

const CardTitle = styled.h1`
  margin: 8px 0;
  font-size: 22px;
`;

interface IProp {
  task: ITask;
}

const TaskItem: React.FC<IProp> = ({ task }) => {
  return (
    <CardContainer>
      <Card>
        <CardContent>
          <CardTitle>{task.title}</CardTitle>
          {task.description}
        </CardContent>
        <CardActions style={{ padding: "14px" }} disableSpacing>
          <Grid
            justify="space-between" // Add it here :)
            container
          >
            <Grid item>
              <FormControl>
                <Select value={task.status}>
                  <MenuItem value={TaskStatus.OPEN}>Aberta</MenuItem>
                  <MenuItem value={TaskStatus.IN_PROGRESS}>
                    Em Progresso
                  </MenuItem>
                  <MenuItem value={TaskStatus.DONE}>Finalizada</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <IconButton>
                <Delete color="error" />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </CardContainer>
  );
};

export default TaskItem;
