import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_LOAD, LOGOUT, SIGNUP } from "./types";

export default (state, action) => {
    switch (action.type){
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.accessToken);
            return {
                ...state,
                token: action.payload.accessToken,
                isAuthenticated: true
            }

        case LOGIN_LOAD:
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload
            }
        
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        
        case SIGNUP:
        default:
            return state;
    }
}