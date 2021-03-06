import React, { Component } from "react";
import MainRouter from "./MainRouter";
import jwtDecode from "jwt-decode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    /* Grabbing the users jwtToken from the browsers localStorage. */
    let getJwtToken = localStorage.getItem("jwtToken");

    /* If there is a token, set the current time. */
    if (getJwtToken) {
      const currentTime = Date.now() / 1000;

      /* Setting the decoded key to a variable for the next step. */
      let decodedJwtToken = jwtDecode(getJwtToken);

      /* If the tokens expiration is less than the currentTime (if the token is expired) log the user out. */
      if (decodedJwtToken.exp < currentTime) {
        this.handleUserLogout();
      } else {
        this.handleUserLogin(decodedJwtToken);
      }
    }
  }

  handleUserLogin = (user) => {
    this.setState({
      user: {
        email: user.email,
      },
    });
  };

  handleUserLogout = () => {
    localStorage.removeItem("jwtToken");
    this.setState({
      user: null,
    });
  };

  render() {
    return (
      <>
        <ToastContainer />
        <MainRouter
          user={this.state.user}
          handleUserLogin={this.handleUserLogin}
          handleUserLogout={this.handleUserLogout}
        />
      </>
    );
  }
}

export default App;
