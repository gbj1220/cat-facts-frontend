import React, { Component } from "react";
import { debounce } from "lodash";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./SignUp.css";
import { checkIfLoggedIn } from "../lib/HelperFunctions";
import { NavLink, Link } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isError: false,
      errObj: {},
    };

    this.onChangeDebounce = debounce(this.onChangeDebounce, 1000);
  }

  componentDidMount() {
    if (checkIfLoggedIn()) {
      this.props.history.push("/auth-home");
    } else {
      this.props.history.push("/sign-up");
    }
  }

  handleSignUp = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onChangeDebounce = () => {
    let errObj = {};
    if (this.state.password !== this.state.confirmPassword) {
      errObj.checkPassword = "Password does not match. Please try again.";
    }
    if (Object.keys(errObj).length > 0) {
      this.setState({
        isError: true,
        errObj: errObj,
      });
    } else {
      this.setState({
        isError: false,
        errObj: {},
      });
    }
  };

  handleOnPasswordChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        this.onChangeDebounce();
      }
    );
  };

  showErrorMessage = () => {
    const eMessage = Object.values(this.state.errObj);
    return eMessage.map((message, index) => {
      <div key={index} className='alert alert-danger'>
        {message}
      </div>;
    });
  };

  handleOnSubmit = async (event) => {
    event.preventDefault();

    const { firstName, lastName, email, password, isError } = this.state;

    if (isError) {
      toast.error("Please check your sign-up information.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }
    try {
      let result = await axios.post("http://localhost:3001/users/sign-up", {
        firstName,
        lastName,
        email,
        password,
      });

      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      toast.success("Proceed to Login Page.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (e) {
      toast.error(
        "Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and at least 1 special symbol.",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      console.log("testing");
    }
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      isError,
    } = this.state;
    return (
      <div>
        <div
          style={{
            fontSize: "10em",
            display: "flex",
            justifyContent: "space-around",
            fontFamily: "fantasy",
            width: "1700px",
            marginLeft: "500px",
            marginTop: "200px",
            marginBottom: "-100px",
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
        <div className='main-container'>
          <main className='form-signin'>
            {isError && this.showErrorMessage()}
            <form onSubmit={this.handleOnSubmit}>
              <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>
              <label htmlFor='inputFirstName' className='visually-hidden'>
                First Name
              </label>
              <input
                type='text'
                id='inputFirstName'
                className='form-control'
                placeholder='First Name'
                required
                autoFocus
                name='firstName'
                value={firstName}
                onChange={this.handleSignUp}
                pattern='[A-Za-z]*'
              />
              <label htmlFor='inputLastName' className='visually-hidden'>
                Last Name
              </label>
              <input
                type='text'
                id='inputLastName'
                className='form-control'
                placeholder='Last Name'
                required
                autoFocus
                name='lastName'
                value={lastName}
                onChange={this.handleSignUp}
                pattern='[A-Za-z]*'
              />
              <label htmlFor='inputEmail' className='visually-hidden'>
                Email address
              </label>{" "}
              <input
                type='email'
                id='inputEmail'
                className='form-control'
                placeholder='Email'
                required
                autoFocus
                name='email'
                value={email}
                onChange={this.handleSignUp}
              />
              <label htmlFor='inputPassword' className='visually-hidden'>
                Password
              </label>{" "}
              <input
                type='password'
                id='inputPassword'
                className='form-control'
                placeholder='Password'
                required
                autoFocus
                name='password'
                value={password}
                onChange={this.handleSignUp}
              />
              <label htmlFor='inputConfirmPassword' className='visually-hidden'>
                Confirm Password
              </label>
              <input
                type='password'
                id='inputConfirmPassword'
                className='form-control'
                placeholder='Confirm Password'
                required
                name='confirmPassword'
                value={confirmPassword}
                onChange={this.handleOnPasswordChange}
              />
              <button
                className='w-100 btn btn-lg btn-primary sign-in-button'
                type='submit'
                style={{ width: 200, marginTop: 10 }}
                disabled={isError ? true : false}
              >
                Sign Up
              </button>
            </form>
          </main>
        </div>
        ;
      </div>
    );
  }
}
export default SignUp;
