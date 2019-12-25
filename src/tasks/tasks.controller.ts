import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getTasks(@Query() filterDTO: GetTasksFilterDTO): Task[] {
        if (Object.keys(filterDTO).length) {
            return this.tasksService.getTasksWithFilter(filterDTO);
        }

        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string) {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(@Body() createTaskDTO: CreateTaskDTO): Task {
        return this.tasksService.createTask(createTaskDTO);
    }

    @Patch('/:id/status')
    updateTaskStatus(@Param('id') id: string, @Body('status') status: TaskStatus) {
        return this.tasksService.updateTaskStatus(id, status);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id') id: string) {
        this.tasksService.deleteTaskById(id);
    }
}
