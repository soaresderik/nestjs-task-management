/** Task */
export interface ITask {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export interface TaskState {
  tasks: ITask[];
}

export interface TaskAction {
  type: TaskType;
  payload: ITask[] | any;
}

export enum TaskType {
  ADD_TASK = "ADD_TASK",
  GET_TASKS = "GET_TASKS",
  UPDATE_TASK = "UPDATE_TASK",
  REMOVE_TASK = "REMOVE_TASK"
}

export enum TaskStatus {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE"
}

/** Auth */

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  error: string | null;
}

export interface AuthAction {
  type: AuthType;
  payload: any;
}

export enum AuthType {
  SIGN_IN = "SIGN_IN",
  SIGN_UP = "SIGN_UP",
  LOGOUT = "LOGOUT",
  SET_ERROR = "SET_ERROR",
  CLEAR_ERROR = "CLEAR_ERROR"
}
