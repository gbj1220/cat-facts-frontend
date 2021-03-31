import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkIfLoggedIn } from "../lib/HelperFunctions";

const PrivateRoute = ({ component: Component, handleUserLogout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routerProps) =>
        checkIfLoggedIn() ? (
          <Component {...routerProps} handleUserLogout={handleUserLogout} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};

export default PrivateRoute;
