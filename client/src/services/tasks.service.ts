import BaseHttpService from "./base-http.service";

export default class TasksService extends BaseHttpService {

    async fetchTasks() {
        return this.get("/tasks");
    }
}