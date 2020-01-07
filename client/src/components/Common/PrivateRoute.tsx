import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AuthState } from "../../store/interfaces";
import { useSelector } from "react-redux";

type LayoutRouteProps = RouteProps & {
    component: React.ComponentType;
};

const PrivateRoute = ({ component, ...rest }: LayoutRouteProps) => {
    const Component = component;
    const auth = useSelector((state: any) => state.auth) as AuthState;
    const { isAuthenticated } = auth;
    return (
        <Route
            {...rest}
            render={props =>
                !isAuthenticated ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default PrivateRoute;
