import TasksService from "../services/tasks.service";
import { observable, action } from "mobx";
import { ITask } from "./interfaces";
import { IFilter } from "../services/interfaces";

export default class TaskStore {
    private taskService: TasksService;
    @observable
    tasks: ITask[] = [];

    constructor(taskService: TasksService){
        this.taskService = taskService;
    }

    @action
    public getTasks = async (args: IFilter) => {
        this.tasks = await this.taskService.fetchTasks(args);
    };

    @action
    public createTask = async (title: string, description: string) => {
        const task = await this.taskService.createTask(title, description);
    };

    @action 
    deleteTask = async (id: any) => {
        await this.taskService.deleteTask(id);
        this.getTasks({});
    }
}