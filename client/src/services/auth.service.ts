import BaseHttpService from "./base-http.service";
import { IAuthenticate } from "./interfaces";

class AuthService extends BaseHttpService {
    async signIn(data: IAuthenticate) {
        return await this.post("auth/signin", data);
    }
}

export default new AuthService();