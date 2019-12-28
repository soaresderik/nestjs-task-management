import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { AuthGuard } from '@nestjs/passport';
import { getUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getTasks(@Query(ValidationPipe) filterDTO: GetTasksFilterDTO, @getUser() user: User) {
        return this.tasksService.getTasks(filterDTO, user);
    }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number, @getUser() user: User): Promise<Task> {
        return this.tasksService.getTaskById(id, user);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDTO: CreateTaskDTO, @getUser() user: User): Promise<Task> {
        return this.tasksService.createTask(createTaskDTO, user);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', TaskStatusValidationPipe) status: TaskStatus,
        @getUser() user: User,
    ) {
        return this.tasksService.updateTaskStatus(id, status, user);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id', ParseIntPipe) id: number, @getUser() user: User) {
        this.tasksService.deleteTaskById(id, user);
    }
}
