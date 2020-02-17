import AuthService from "../services/auth.service";
import { AuthResponse, IAuthenticate } from "../services/interfaces";
import { observable, action } from "mobx";


export default class UserStore {
    private authService: AuthService;

    public user: AuthResponse | undefined;
    @observable signed: boolean;

    constructor(authService: AuthService){
        this.authService = authService;
        this.signed = false;
    }

    @action
    public signIn = async (data: IAuthenticate) => {
        this.user = await this.authService.signIn(data);

        if(this.user){
            this.signed = true;
            this.authService.saveToken(this.user.accessToken);
        }
    }

    @action 
    public logout = async () => {
        this.signed = false;
        this.authService.removeToken();
    }

    @action
    public loadUser = () => {
        this.signed = true;
    }
}