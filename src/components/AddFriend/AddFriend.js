import axios from "axios";
import React, { Component } from "react";

import "./AddFriend.css";

export class addFriend extends Component {
  state = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    friendsArray: "",
    isError: false,
    errObj: {},
  };

  showErrorMessageObj = () => {
    let errorMessageArray = Object.values(this.state.errorObj);
    return errorMessageArray.map((errorMessage, index) => {
      return (
        <div key={index} className='alert alert-danger'>
          {errorMessage}
        </div>
      );
    });
  };

  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = async (event) => {
    event.preventDefault();

    const { firstName, lastName, mobileNumber } = this.state;

    const jwtToken = localStorage.getItem("jwtToken");

    try {
      let payload = await axios.post(
        "http://localhost:3001/friends/create-new-friend",
        {
          firstName,
          lastName,
          mobileNumber,
        },
        {
          headers: {
            authorization: `Bearer ${jwtToken}`,
          },
        }
      );

      const newFriendsArray = [...this.state.friendsArray, payload.data];
      this.setState({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        friendsArray: newFriendsArray,
      });

      this.props.history.push("/auth-home");
    } catch (e) {
      console.log(e.response);
    }
  };

  render() {
    const { firstName, lastName, mobileNumber, isError } = this.state;
    return (
      <>
        <main>
          <div className='position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light'>
            <div className='col-md-5 p-lg-5 mx-auto my-5'>
              <h1 className='display-4 fw-normal'>It All Starts Here!</h1>
              <p className='lead fw-normal'>
                Welcome to Cat Facts! The process is simple. Add the persons
                first name, last name, and phone number that you would like to
                annoy with cat facts.
              </p>
              <a className='btn btn-outline-secondary' href='#'>
                Coming soon
              </a>
            </div>
            <div className='product-device shadow-sm d-none d-md-block' />
            <div className='product-device product-device-2 shadow-sm d-none d-md-block' />
          </div>
        </main>

        <div>
          <main className='form-add-friend'>
            {isError && this.showErrorMessageObj()}
            <form onSubmit={this.handleOnSubmit}>
              <div>
                <span>
                  <h1 id='title'>Add A Friend! </h1>
                </span>

                <div className='form-floating mb-3'>
                  <label htmlFor='inputFirstName' className='visually-hidden'>
                    First Name
                  </label>
                  <input
                    type='text'
                    id='FN-input'
                    className='input-form'
                    placeholder='First Name'
                    required
                    autoFocus
                    name='firstName'
                    value={firstName}
                    onChange={this.handleInput}
                    pattern='[A-Za-z]*'
                  />
                  <div className='form-floating mb-3'>
                    <label htmlFor='inputLastName' className='visually-hidden'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      id='LN-input'
                      className='input-form'
                      placeholder='Last Name'
                      required
                      autoFocus
                      name='lastName'
                      value={lastName}
                      onChange={this.handleInput}
                      pattern='[A-Za-z]*'
                    />
                    <div className='form-floating mb-3'>
                      <label
                        htmlFor='floatingInput'
                        className='visually-hidden'
                      >
                        Mobile Number
                      </label>
                      <input
                        type='string'
                        id='EA-input'
                        className='input-form'
                        placeholder='Mobile Number'
                        required
                        autoFocus
                        name='mobileNumber'
                        value={mobileNumber}
                        onChange={this.handleInput}
                        pattern='[0-9]*'
                      />
                    </div>
                    <button
                      type='submit'
                      className='btn btn-outline-light'
                      style={{ marginLeft: "75px", width: "350px" }}
                      disabled={isError ? true : false}
                    >
                      Add Friend
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </main>
        </div>
        <div></div>
      </>
    );
  }
}
export default addFriend;
