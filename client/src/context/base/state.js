import { useReducer, createContext } from "react"
import TaskReducer from "./reducers";


const TaskContext = createContext();


const TaskState = props => {
    const initialState = {
       loading: false
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    return (
        <TaskContext.Provider value={{
            loading: state.loading,
        }}> 
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;