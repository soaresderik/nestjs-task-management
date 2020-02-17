import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import './App.css';
import Route from "./Route";

import SignUp from "./components/SignUp";
import SignIn from './components/SignIn';
import Tasks from './components/Tasks';
import CreateTask from './components/CreateTask';
import { userStore } from "./store/context";

const token: string | null = localStorage.accessToken || null;

if (token) (async function() { await userStore.loadUser() })();

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/tasks/create" component={CreateTask} isPrivate />
        <Route path="/tasks" component={Tasks} isPrivate />
        <Redirect to="/signin"/>
      </Switch>
    </Router>
  );
};

export default App;
