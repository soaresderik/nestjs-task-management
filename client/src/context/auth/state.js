import React, { useReducer } from "react"
import AuthReducer from "./reducers";
import { api, setAuthToken } from "../../utils/api";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_LOAD, LOGOUT } from "./types";
import AuthContext from "./context";

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        user: null,
        error: null,
        loading: false
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const loadUser = () => {
        const token = localStorage.token

        if(!token){
            logout();
            return;
        } 

        setAuthToken(token)
        
        dispatch({
            type: LOGIN_LOAD,
            payload: token,
        })
    };

    const login = async formData => {
        try {
            const res = await api.post('/auth/signin', formData);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });

            loadUser();
        } catch (err) {
            dispatch({
                type: LOGIN_FAIL,
                payload: JSON.stringify(err.response.data.message || err.message)
            })
        }
    }

    const logout = async () => dispatch({ type: LOGOUT })

    return (
        <AuthContext.Provider value={{
            token: state.token,
            user: state.user,
            isAuthenticated: state.isAuthenticated,
            error: state.error,
            login,
            logout,
            loadUser
        }}> 
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;
