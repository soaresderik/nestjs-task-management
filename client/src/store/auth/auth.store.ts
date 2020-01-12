import { AuthState, AuthType, AuthAction } from "../interfaces";

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
  error: null
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
    case AuthType.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case AuthType.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export default authStore;
