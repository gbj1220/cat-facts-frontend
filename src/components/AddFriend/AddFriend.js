import axios from "axios";
import React, { Component } from "react";

import "./AddFriend.css";

export class addFriend extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
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

    const { firstName, lastName, email } = this.state;

    const jwtToken = localStorage.getItem("jwtToken");

    try {
      let payload = await axios.post(
        "http://localhost:3001/friends/create-new-friend",
        {
          firstName,
          lastName,
          email,
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
        email: "",
        friendsArray: newFriendsArray,
      });

      this.props.history.push("/auth-home");
    } catch (e) {
      console.log(e.response);
    }
  };

  render() {
    const { firstName, lastName, email, isError } = this.state;
    return (
      <>
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
                    className='form-control'
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
                      className='form-control'
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
                        Email address
                      </label>
                      <input
                        type='email'
                        id='EA-input'
                        className='form-control'
                        placeholder='Email'
                        required
                        autoFocus
                        name='email'
                        value={email}
                        onChange={this.handleInput}
                      />
                    </div>
                    <div>
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
              </div>
            </form>
          </main>
        </div>
      </>
    );
  }
}
export default addFriend;
