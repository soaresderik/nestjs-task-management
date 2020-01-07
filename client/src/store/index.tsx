import { combineReducers, createStore, compose } from "redux";

import tasksStore from "./tasks/tasks.store";
import authStore from "./auth/auth.store";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const actions = combineReducers({
    auth: authStore,
    tasks: tasksStore
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(actions, composeEnhancers());

export default store;
