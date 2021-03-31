import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AuthHome from "./components/AuthHome/AuthHome";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
const MainRouter = (props) => {
  return (
    <Router>
      <Navbar user={props.user} handleUserLogout={props.handleUserLogout} />
      <Switch>
        <PrivateRoute exact path='/auth-home' component={AuthHome} />
        <Route
          exact
          path='/login'
          render={(renderMethodProps) => (
            <Login
              {...renderMethodProps}
              handleUserLogin={props.handleUserLogin}
            />
          )}
        />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
