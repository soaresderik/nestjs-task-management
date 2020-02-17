import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class AuthCredentialsDTO {
    @IsString()
    @MinLength(4)
    @MaxLength(8)
    username: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    password: string;
}
