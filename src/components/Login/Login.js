import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import { checkIfLoggedIn } from "../lib/HelperFunctions";

import "./Login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  componentDidMount() {
    if (checkIfLoggedIn()) {
      this.props.history.push("/auth-home");
    } else {
      this.props.history.push("/login");
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { email, password } = this.state;

      const result = await axios.post("http://localhost:3001/users/login", {
        email,
        password,
      });

      localStorage.setItem("jwtToken", result.data.jwtToken);

      const decodedToken = jwtDecode(result.data.jwtToken);

      this.props.handleUserLogin(decodedToken);

      this.props.history.push("/auth-home");
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <div style={{ marginTop: "400px" }}>
        <div
          style={{
            fontSize: "10em",
            display: "flex",
            justifyContent: "space-around",
            fontFamily: "fantasy",
            width: "1700px",
            marginLeft: "500px",
            marginTop: "-200px",
            marginBottom: "120px",
          }}
        >
          <span style={{ color: "red" }}>C</span>
          <span style={{ color: "orange" }}>A</span>
          <span style={{ color: "yellow" }}>T</span>
          <span style={{ color: "blue" }}>F</span>
          <span style={{ color: "indigo" }}>A</span>
          <span style={{ color: "violet" }}>C</span>
          <span style={{ color: "red" }}>T</span>
          <span style={{ color: "orange" }}>S</span>
        </div>
        <main className='form-signIn'>
          <form onSubmit={this.handleSubmit} id='login-form'>
            <h1 className='h3 mb-3 fw-normal'>Please Login</h1>

            <label htmlFor='inputEmail' className='visually-hidden'>
              Email address
            </label>
            <input
              type='email'
              id='inputEmail'
              className='form-control'
              placeholder='Email'
              required
              autoFocus
              name='email'
              value={email}
              onChange={this.handleInput}
            />

            <label htmlFor='inputPassword' className='visually-hidden'>
              Password
            </label>
            <input
              type='text'
              id='inputPassword'
              className='form-control'
              placeholder='Password'
              required
              autoFocus
              name='password'
              value={password}
              onChange={this.handleInput}
            />

            <button className='w-100 btn btn-lg btn-primary' type='submit'>
              Login
            </button>
          </form>
        </main>
      </div>
    );
  }
}

export default Login;
