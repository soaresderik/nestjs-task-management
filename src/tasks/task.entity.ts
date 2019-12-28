import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { User } from '../auth/user.entity';

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

    @Column()
    userId: number;

    @ManyToOne(type => User, user => user.tasks, { eager: false })
    user: User;
}
