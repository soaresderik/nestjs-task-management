import { Controller, Post, Body, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/signup')
    async signUp(@Body(ValidationPipe) authCredentialsDTO: AuthCredentialsDTO) {
        return this.authService.signUp(authCredentialsDTO);
    }

    @Post('/signin')
    async signIn(@Body(ValidationPipe) authCredentialsDTO: AuthCredentialsDTO) {
        return this.authService.signIn(authCredentialsDTO);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    test(@Req() req) {
        // console.log(req);
    }
}
