import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import tasksStore from "./store/tasks/tasks.store";
import authStore from "./store/auth/auth.store";

import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";

const actions = combineReducers({
    auth: authStore,
    tasks: tasksStore,
});

const store = createStore(actions);

const NotFound = () => <h1>Página não encontrada</h1>;

export default () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/cadastrar" exact component={Login} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </Provider>
    );
};