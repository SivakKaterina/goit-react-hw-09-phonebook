import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../redux/auth/auth-selector";

export default function PrivatRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const isAthenticated = useSelector(getIsAuth);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
}
