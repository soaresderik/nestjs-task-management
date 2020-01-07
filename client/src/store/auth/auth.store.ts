import { AuthState, AuthType, AuthAction } from "../interfaces";

const initialState: AuthState = {
    token: null,
    isAuthenticated: false
};

const authStore = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthType.SIGN_IN:
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true
            };
        case AuthType.LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticated: false
            };
        default:
            return state;
    }
};

export default authStore;
