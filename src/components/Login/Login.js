import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import { toast } from "react-toastify";
import { checkIfLoggedIn } from "../lib/HelperFunctions";

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
      toast.error(e.response.data, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <div style={{ marginTop: "400px" }}>
        <main className='form-signin'>
          <form onSubmit={this.handleSubmit}>
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
