import { TaskStatus } from "../store/interfaces";

export interface IAuthenticate {
  username: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
}

export interface IFilter {
  search?: string;
  status?: TaskStatus;
}
