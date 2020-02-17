import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { useStore } from "./store/context";
import { observer } from "mobx-react-lite";

type LayoutRouteProps = RouteProps & {
  component: React.ComponentType;
  isPrivate?: boolean;
};

const RouteWrapper = observer(({ component, isPrivate, ...rest }: LayoutRouteProps) => {
  const Component = component;
  // const auth = useSelector((state: any) => state.auth) as AuthState;
  const { signed } = useStore().userStore;

  if (!signed && isPrivate) return <Redirect to="/signin" />;

  if (signed && !isPrivate) return <Redirect to="/tasks" />;

  return (
    <Route
      {...rest}
      render={props => (
          <Component {...props} />
      )}
    />
  );
});

export default RouteWrapper;