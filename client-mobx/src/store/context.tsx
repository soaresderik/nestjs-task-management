import { createContext, useContext } from "react";
import UserStore from "./user.store";

import AuthService from "../services/auth.service";
import TaskStore from "./task.store";
import TasksService from "../services/tasks.service";

export const userStore = new UserStore(new AuthService())

export const storeContext = createContext({
    userStore,
    taskStore: new TaskStore(new TasksService())
});

export const useStore = () => useContext(storeContext);