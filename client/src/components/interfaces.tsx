import { History, LocationState } from "history";

export interface GlobalProp {
  history: History<LocationState>;
}
