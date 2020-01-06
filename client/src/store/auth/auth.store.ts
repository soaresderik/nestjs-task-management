import { AuthState, AuthType, AuthAction } from "../interfaces";

const initialState: AuthState = {
    token: null,
    isAuthenticated: false,
};

const authStore = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case AuthType.SIGN_IN:
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
            };
        default:
            return state;
    }
};

export default authStore;