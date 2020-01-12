import tasksService from "../../services/tasks.service";
import store from "../index";
import { TaskType } from "../interfaces";
import { IFilter } from "../../services/interfaces";

export const getTasks = async (args: IFilter) => {
  const response = await tasksService.fetchTasks(args);

  return {
    type: TaskType.GET_TASKS,
    payload: response.data
  };
};
