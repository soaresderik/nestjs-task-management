import { TaskStatus } from '../tasks.model';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetTasksFilterDTO {
    @IsOptional()
    @IsNotEmpty()
    search: string;

    @IsOptional()
    @IsIn([...Object.values(TaskStatus)])
    status: TaskStatus;
}
