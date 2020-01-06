import { GET_TASKS, CREATE_TASK, DELETE_TASK } from "./types";


export default (state, action) => {
    switch (action.type){
        case GET_TASKS:
            return {
                ...state,
                tasks: [...action.payload]
            }
        case CREATE_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(t => t.id !== action.payload)
            }
        
        default:
            return state;
    }
}