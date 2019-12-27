import { Repository, EntityRepository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

    async getTasks(filterDTO: GetTasksFilterDTO): Promise<Task[]> {
        const {search, status} = filterDTO;

        const query = await this.createQueryBuilder('task');

        if (status) query.andWhere('task.status = :status', { status });
        if (search)
            query.andWhere('(task.title LIKE :search OR task.description LIKE :search)',
                { search: `%${search}%` },
            );

        const tasks = await query.getMany();

        return tasks;
    }

    async createTask(createTaskDTO: CreateTaskDTO) {
        const { title, description } = createTaskDTO;
        const task = new Task();

        task.title = title;
        task.description = description;
        task.status = TaskStatus.OPEN;

        await this.manager.save(task);

        return task;
    }

    async deleteTask(task: Task) {
        await this.manager.remove(task);
    }

    async _save(task) {
        return await this.manager.save(task);
    }

}
