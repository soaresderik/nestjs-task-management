import React, { useReducer } from "react"
import alertReducer from "./reducers";
import TaskContext from "./context";
import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

const TaskState = props => {
    const initialState = []

    const [state, dispatch] = useReducer(alertReducer, initialState);

    const setAlert = (msg, timeout = 5000) => {
        const id = uuid.v4();

        dispatch({ type: SET_ALERT, payload: { id, msg }})

        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
    }

    return (
        <TaskContext.Provider value={{
            alerts: state,
            setAlert
        }}> 
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;