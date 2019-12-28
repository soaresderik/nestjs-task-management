import { Test  } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TaskRepository } from './task.repository';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';

const mockUser = { id: 2, username: 'andre' };
const mockTaskRepository = () => ({
    getTasks: jest.fn(),
    findOne: jest.fn(),
    createTask: jest.fn(),
    delete: jest.fn(),
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

    describe('getTaskById', () => {
        it('calls taskRepository.findOne() and succesffuly retrieve and return the task', async () => {
            const mockTask = { title: 'Task one', description: 'Some description' };
            taskRepository.findOne.mockResolvedValue(mockTask);

            const result = await taskService.getTaskById(1, mockUser);
            expect(result).toEqual(mockTask);
            expect(taskRepository.findOne).toHaveBeenCalledWith({
                where: {
                    id: 1,
                    userId: mockUser.id,
                },
            });
        });

        it('throw an error as task is not found', () => {
            taskRepository.findOne.mockResolvedValue(null);
            expect(taskService.getTaskById(1, mockUser)).rejects.toThrow();
        });
    });

    describe('createTask', () => {
        it('calls taskRepository.createTask() and return the result', async () => {
            expect(taskRepository.createTask).not.toHaveBeenCalled();
            const createTaskDTO = { title: 'Task one', description: 'Some description' };
            const result = await taskService.createTask(createTaskDTO, mockUser);
            expect(taskRepository.createTask).toHaveBeenCalledWith(createTaskDTO, mockUser);
        });
    });

    describe('deleteTask', () => {
        it('calls taskRepository.deleteTaskById() to delete a task', async () => {
            expect(taskRepository.delete).not.toHaveBeenCalled();
            await taskService.deleteTaskById(1, mockUser);
            expect(taskRepository.delete).toHaveBeenCalledWith({ id: 1, userId: mockUser.id });
        });
    });
});
