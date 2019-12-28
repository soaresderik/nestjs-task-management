import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { getManager } from 'typeorm';
import { User } from 'src/auth/user.entity';

@Injectable()
export class TasksService {
    private entityManager = getManager();
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository) {}

    async getTasks(filterDTO: GetTasksFilterDTO, user: User) {
        return this.taskRepository.getTasks(filterDTO, user);
    }

    async createTask(createTaskDTO: CreateTaskDTO, user: User): Promise<Task> {
        return this.taskRepository.createTask(createTaskDTO, user);
    }

    async getTaskById(id: number, user: User): Promise<Task> {
        const found = await this.taskRepository.findOne({ where: { id, userId: user.id }});

        if (!found) throw new NotFoundException(`Task with ID "${id}" not found`);

        return found;
    }

    async updateTaskStatus(id: number, status: TaskStatus, user: User): Promise<Task> {
        const task = await this.getTaskById(id, user);
        task.status = status;
        return this.taskRepository._save(task);
    }

    async deleteTaskById(id: number, user: User): Promise<void> {
        const found = await this.getTaskById(id, user);
        this.taskRepository.deleteTask(found);
    }
}
