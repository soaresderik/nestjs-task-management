import { TaskState, TaskAction, TaskType } from "../interfaces";

const initialState: TaskState = {
    tasks: [],
};

const taskStore = (state = initialState, action: TaskAction) => {
    switch (action.type) {
        case TaskType.ADD_TASK:
            return {
                ...state,
                 tasks: [...state.tasks, action.payload],
            };
        default:
            return state;
    }
};

export default taskStore;