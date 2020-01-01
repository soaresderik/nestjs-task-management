import React, { useReducer } from "react"
import TaskReducer from "./reducers";
import { api } from "../../utils/api";
import { GET_TASKS, TASK_ERROR, CREATE_TASK } from "./types";
import TaskContext from "./context";

const TaskState = props => {
    const initialState = {
       tasks: [],
       loading: false
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getTasks = async () => {
        try {
            const res = await api.get('/tasks');

            dispatch({
                type: GET_TASKS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: TASK_ERROR,
                payload: err.response.msg
            })
        }
    }

    const createTask = async formData => {
        try {
            const res = await api.post('/tasks', formData);

            dispatch({ 
                type: CREATE_TASK,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: TASK_ERROR,
                payload: err.response.msg
            })
        }
    }

    return (
        <TaskContext.Provider value={{
            tasks: state.tasks,
            loading: state.loading,
            getTasks,
            createTask
        }}> 
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;