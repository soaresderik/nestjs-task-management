import { TaskStatus } from '../tasks.model';

export class GetTasksFilterDTO {
    search: string;
    status: TaskStatus;
}
