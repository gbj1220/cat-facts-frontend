import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/Login/Login";

const MainRouter = (props) => {
  return (
    <Router>
      <Navbar user={props.user} handleUserLogout={props.handleUserLogout} />
      <Switch>
        <Route exact path='/login' component={LogIn} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/' component={LogIn} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
