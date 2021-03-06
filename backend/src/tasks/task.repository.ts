import { Repository, EntityRepository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { User } from 'src/auth/user.entity';
import { Logger, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
    private logger = new Logger('TaskRepository');

    async getTasks(filterDTO: GetTasksFilterDTO, user: User): Promise<Task[]> {
        const { search, status } = filterDTO;

        try {
            const query = await this.createQueryBuilder('task');

            query.where('task.userId = :userId', { userId: user.id });

            if (status) query.andWhere('task.status = :status', { status });
            if (search)
                query.andWhere('(task.title LIKE :search OR task.description LIKE :search)',
                    { search: `%${search}%` },
                );

            const tasks = await query.getMany();

            return tasks;
        } catch (err) {
            this.logger.error(`Failed to get tasks for user "${user.username}". DTO: ${JSON.stringify(filterDTO)}`, err.message);
            throw new InternalServerErrorException();
        }
    }

    async createTask(createTaskDTO: CreateTaskDTO, user: User) {
        const { title, description } = createTaskDTO;
        const task = new Task();

        task.title = title;
        task.description = description;
        task.user = user;
        task.status = TaskStatus.OPEN;

        await this.manager.save(task);

        delete task.user;

        return task;
    }

    async deleteTask(task: Task) {
        await this.manager.remove(task);
    }

    async _save(task) {
        return await this.manager.save(task);
    }

}
