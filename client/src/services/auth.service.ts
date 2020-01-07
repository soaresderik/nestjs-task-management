import BaseHttpService from "./base-http.service";
import { IAuthenticate, AuthResponse } from "./interfaces";

class AuthService extends BaseHttpService {
    async signIn(data: IAuthenticate): Promise<AuthResponse> {
        const response = await this.post("auth/signin", data);
        return response.data;
    }
}

export default new AuthService();
