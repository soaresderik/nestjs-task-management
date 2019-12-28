import { Test  } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TaskRepository } from './task.repository';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';

const mockUser = { username: 'andre' };
const mockTaskRepository = () => ({
    getTasks: jest.fn(),
});

describe('TaskService', () => {
    let taskService;
    let taskRepository;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                TasksService,
                { provide: TaskRepository, useFactory: mockTaskRepository },
            ],
        }).compile();

        taskService = await module.get<TasksService>(TasksService);
        taskRepository = await module.get<TaskRepository>(TaskRepository);
    });

    describe('getTasks', () => {
        it('gets all tasks from the repository', () => {
            expect(taskRepository.getTasks).not.toHaveBeenCalled();

            const filter: GetTasksFilterDTO = { status: TaskStatus.IN_PROGRESS, search: 'some search'};
            taskService.getTasks(filter, mockUser);
            expect(taskRepository.getTasks).toHaveBeenCalled();
        });

    });
});
