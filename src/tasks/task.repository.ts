import { Repository, EntityRepository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

    async createTask(createTaskDTO: CreateTaskDTO) {
        const { title, description } = createTaskDTO;
        const task = new Task();

        task.title = title;
        task.description = description;
        task.status = TaskStatus.OPEN;

        await this.manager.save(task);

        return task;
    }

}
