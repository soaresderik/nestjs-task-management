import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { TaskStatus } from './task-status.enum';

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;
}
