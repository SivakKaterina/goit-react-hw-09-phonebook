import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../redux/auth/auth-selector";

export default function PublicRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const isAthenticated = useSelector(getIsAuth);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAthenticated && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
