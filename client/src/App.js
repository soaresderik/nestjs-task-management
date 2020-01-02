import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import './App.css';

import AuthState from './context/auth/state';
import TaskState from './context/tasks/state';
import AlertState from './context/alert/state';

import { Navbar } from "./components/home/Home";
import Login from './components/auth/Login';
import Home from './components/home/Home';
import Task from './components/task/Task';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/auth/Register';
import CreateTask from './components/task/CreateTask';
import Error from './components/common/Error';


const App = () => {
    return (
      <AlertState>
        <AuthState>
          <TaskState>
            <SnackbarProvider
               anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
            <Router>
              <Fragment>
                <Navbar />
                <div>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/cadastrar" component={Register} />
                    <PrivateRoute exact path="/tarefas" component={Task} />
                    <PrivateRoute exact path="/tarefas/criar" component={CreateTask} />
                  </Switch>
                </div>
              </Fragment>
            </Router>
            </SnackbarProvider>
          </TaskState>
        </AuthState>
      </AlertState>
    );
}

export default App;
