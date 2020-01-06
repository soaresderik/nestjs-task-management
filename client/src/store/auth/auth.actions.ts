import { IAuthenticate } from "../../services/interfaces";
import authService from "../../services/auth.service";
import { AuthType } from "../interfaces";

export const signIn = async (auth: IAuthenticate) => {
    const response = await authService.signIn(auth);

    return {
        type: AuthType.SIGN_IN,
        payload: response.data,
    };
};