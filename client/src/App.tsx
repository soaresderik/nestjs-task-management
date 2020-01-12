import * as React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { GlobalProp } from "./components/interfaces";
import store from "./store";

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Tasks from "./components/Task/Tasks";
import CreateTask from "./components/Task/CreateTask";
import PrivateRoute from "./components/Common/PrivateRoute";

const NotFound = () => <h1>Página não encontrada</h1>;

const App: React.FC<GlobalProp> = props => {
  return (
    <Provider store={store}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
      >
        <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/cadastrar" component={Signup} />
            <PrivateRoute path="/tarefas/criar" component={CreateTask} />
            <PrivateRoute path="/tarefas" component={Tasks} />
            <Redirect to="/login" />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </SnackbarProvider>
    </Provider>
  );
};

export default App;
