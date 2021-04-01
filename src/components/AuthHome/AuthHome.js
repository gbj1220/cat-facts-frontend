import React, { Component } from "react";
import axios from "axios";

import "./AuthHome.css";

class AuthHome extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    isError: false,
    errorObj: false,
    friendsArray: [],
  };

  findAllFriends = () => {
    return this.state.friendsArray.map((data) => {
      return (
        <ul>
          <li className='list-group-item'>
            {data.firstName} {data.lastName}
          </li>
        </ul>
      );
    });
  };

  componentDidMount = async () => {
    try {
      let jwtToken = localStorage.getItem("jwtToken");
      let payload = await axios.get(
        "http://localhost:3001/friends/get-friends-list",
        {
          headers: {
            authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      console.log(payload);

      this.setState({
        isLoading: false,
        friendsArray: payload.data.friends,
      });

      this.findAllFriends();
    } catch (e) {
      console.log(e.message);
    }
  };

  render() {
    return (
      <div>
        <img
          src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fsp9VjRjvV7s%2Fmaxresdefault.jpg&f=1&nofb=1'
          className='img-fluid'
          alt='...'
        ></img>
        <div className='row'>
          <div className='col-lg-4'>
            <h2>Add Friend</h2>
            <ul> {this.findAllFriends()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthHome;
