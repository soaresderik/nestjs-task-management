import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'taskmanagement.db',
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true,
};
