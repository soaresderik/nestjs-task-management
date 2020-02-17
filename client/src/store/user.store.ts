import { IAuthenticate, AuthResponse } from "../services/interfaces";
import AuthService from "../services/auth.service";

export default class UserStore {
    private authService: AuthService;
    private username: AuthResponse;
    constructor(authService: AuthService) {
        this.authService = authService;
    }

    public signIn = async (auth: IAuthenticate) => {
        this.username = await this.authService.signIn(auth);
    }
}