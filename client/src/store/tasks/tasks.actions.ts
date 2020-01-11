import tasksService from "../../services/tasks.service";
import store from "../index";
import { TaskType } from "../interfaces";

export const getTasks = async () => {
  const response = await tasksService.fetchTasks();

  return {
    type: TaskType.GET_TASKS,
    payload: response.data
  };
};
