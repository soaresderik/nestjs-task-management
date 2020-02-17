import BaseHttpService from "./base-http.service";
import { IAuthenticate, AuthResponse } from "./interfaces";

export default class AuthService extends BaseHttpService {
    async signIn(data: IAuthenticate): Promise<AuthResponse> {
        const response = await this.post("auth/signin", data);
        return response.data;
    }
}