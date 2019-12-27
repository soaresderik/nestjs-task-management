import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(authCredentialDTO: AuthCredentialsDTO): Promise<void> {
        const { username, password} = authCredentialDTO;

        const user = new User();
        user.username = username;
        user.password = password;

        await this.manager.save(user);
    }
}
