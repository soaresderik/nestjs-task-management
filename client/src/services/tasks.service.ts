import BaseHttpService from "./base-http.service";
import * as queryString from "query-string";
import { IFilter } from "./interfaces";

class TasksService extends BaseHttpService {
  async fetchTasks({ status, search }: IFilter) {
    const query: IFilter = {};

    if (status && status.length) query.status = status;
    if (search) query.search = search;

    return this.get(`tasks?${queryString.stringify(query) || ""}`);
  }
}

export default new TasksService();
