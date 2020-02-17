import BaseHttpService from "./base-http.service";
import * as queryString from "query-string";
import { IFilter } from "./interfaces";
import { ITask, TaskStatus } from "../store/interfaces";

export default class TasksService extends BaseHttpService {
  async fetchTasks({ status, search }: IFilter): Promise<ITask[]> {
    const query: IFilter = {};

    if (status && status.length) query.status = status;
    if (search) query.search = search;

    const response = await this.get(`tasks?${queryString.stringify(query) || ""}`);

    return response.data;
  }

  async createTask(title: string, description: string): Promise<ITask> {
    const response = await this.post("tasks", { title, description });
    return response.data;
  }

  async updateTask(id: number, status: TaskStatus): Promise<ITask> {
    const response = await this.patch(`tasks/${id}/status`, { status });
    return response.data;
  }

  async deleteTask(id: number): Promise<void> {
    await this.delete(`tasks/${id}`);
  }
}
