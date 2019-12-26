import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { getManager } from 'typeorm';

@Injectable()
export class TasksService {
    private entityManager = getManager();
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository) {}
    // getTasksWithFilter(filterDTO: GetTasksFilterDTO): Task[] {
    //     const { search, status } = filterDTO;

    //     let tasks = this.getAllTasks();

    //     if (status)
    //         tasks = tasks.filter(task => task.status === status);

    //     if (search)
    //         tasks = tasks.filter(task =>
    //             (task.description.includes(search) || task.title.includes(search)),
    //         );

    //     return tasks;
    // }

    async createTask(createTaskDTO: CreateTaskDTO): Promise<Task> {
        return this.taskRepository.createTask(createTaskDTO);
    }

    async getTaskById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);

        if (!found) throw new NotFoundException(`Task with ID "${id}" not found`);

        return found;
    }

    async updateTaskStatus(id: number, status: TaskStatus): Promise<Task> {
        const task = await this.getTaskById(id);
        task.status = status;
        return this.taskRepository._save(task);
    }

    async deleteTaskById(id: number): Promise<void> {
        const found = await this.getTaskById(id);
        this.taskRepository.deleteTask(found);
    }
}
