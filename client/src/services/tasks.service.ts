import BaseHttpService from "./base-http.service";

class TasksService extends BaseHttpService {
  async fetchTasks() {
    return this.get("tasks");
  }
}

export default new TasksService();
