import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ) {}

    async signUp(authCredentialsDTO: AuthCredentialsDTO) {
        return this.userRepository.signUp(authCredentialsDTO);
    }

    async signIn(authCredentialsDTO: AuthCredentialsDTO) {
        const result = await this.userRepository.validateUserPassword(authCredentialsDTO);

        if (!result) throw new UnauthorizedException(`Invalid credentials`);
    }
}