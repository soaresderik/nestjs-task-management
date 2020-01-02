import React, { useReducer } from "react"
import alertReducer from "./reducers";
import AlertContext from "./context";
import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

const AlertState = props => {
    const initialState = []

    const [state, dispatch] = useReducer(alertReducer, initialState);

    const setAlert = (msg, timeout = 5000) => {
        const id = uuid.v4();

        dispatch({ type: SET_ALERT, payload: { id, msg }})

        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
    }

    return (
        <AlertContext.Provider value={{
            alerts: state,
            setAlert
        }}> 
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;