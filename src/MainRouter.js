import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp/SignUp";

class MainRouter extends Component {
  render() {
    return (
      <Router>
        <Navbar>
          <Switch>
            <Route exact path='/sign-up' component={SignUp} />
            <Route exact path='/' component={Home}></Route>
          </Switch>
        </Navbar>
      </Router>
    );
  }
}

export default MainRouter;
