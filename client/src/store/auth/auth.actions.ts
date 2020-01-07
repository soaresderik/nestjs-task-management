import { IAuthenticate } from "../../services/interfaces";
import authService from "../../services/auth.service";
import { AuthType } from "../interfaces";
import store from "../index";

export const signIn = async (auth: IAuthenticate) => {
    const response = await authService.signIn(auth);
    const token = response.accessToken;
    authService.saveToken(token);

    return {
        type: AuthType.SIGN_IN,
        payload: token
    };
};

export const loadUser = () => {
    const token = authService.loadToken();

    if (!token || !token.length) return store.dispatch(logout());

    return {
        type: AuthType.SIGN_IN,
        payload: token
    };
};

export const logout = () => {
    authService.removeToken();
    return {
        type: AuthType.LOGOUT
    };
};
