import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Tasks from "./components/Task/Tasks";
import PrivateRoute from "./components/Common/PrivateRoute";

const NotFound = () => <h1>Página não encontrada</h1>;

export default () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/cadastrar" exact component={Signup} />
                    <PrivateRoute path="/tarefas" component={Tasks} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </Provider>
    );
};
