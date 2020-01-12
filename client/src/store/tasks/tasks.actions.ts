import tasksService from "../../services/tasks.service";
import store from "../index";
import { TaskType, TaskStatus } from "../interfaces";
import { IFilter } from "../../services/interfaces";

export const getTasks = async (args: IFilter) => {
  const response = await tasksService.fetchTasks(args);

  return {
    type: TaskType.GET_TASKS,
    payload: response.data
  };
};

export const createTask = async (title: string, description: string) => {
  const response = await tasksService.createTask(title, description);

  return {
    type: TaskType.ADD_TASK,
    payload: response
  };
};

export const deleteTask = async (id: number) => {
  await tasksService.deleteTask(id);
  return {
    type: TaskType.REMOVE_TASK,
    payload: id
  };
};

export const updateTask = async (id: number, status: TaskStatus) => {
  const response = await tasksService.updateTask(id, status);
  return {
    type: TaskType.UPDATE_TASK,
    payload: response
  };
};
