import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(authCredentialDTO: AuthCredentialsDTO): Promise<void> {
        const { username, password} = authCredentialDTO;

        const user = new User();
        user.username = username;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);

        try {
            await this.manager.save(user);
        } catch (err) {
            // duplicate error
            if (err.errno === 19) throw new ConflictException('username already exist!');

            throw new InternalServerErrorException();
        }
    }

    private async hashPassword(password: string, salt: string) {
        return await bcrypt.hash(password, salt);
    }
}
