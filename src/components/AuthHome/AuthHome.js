import React, { Component } from "react";
import axios from "axios";

import "./AuthHome.css";

class AuthHome extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    isLoading: false,
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
    this.setState({
      isLoading: true,
    });

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

      this.setState({
        friendsArray: payload.data.friends,
        isLoading: false,
      });

      this.findAllFriends();
    } catch (e) {
      console.log(e.message);
    }
  };

  handleSendToFriend = async (req, res) => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const payload = await axios.get(
        "http://localhost:3001/friends/get-friends-list",
        payload,
        {
          header: {
            authorization: `Bearer ${jwtToken}`,
          },
        }
      );

      if (payload) {
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  render() {
    return (
      <div className='main-container'>
        <img
          src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fsp9VjRjvV7s%2Fmaxresdefault.jpg&f=1&nofb=1'
          className='img-fluid'
          id='img-fluid'
          alt='...'
        ></img>
        {this.state.isLoading ? (
          <div style={{ textAlign: "center", fontSize: "2em" }}>...Loading</div>
        ) : (
          <div>
            <div className='row' id='friends-row'>
              <div className='col-lg-4' id='idk'>
                <h2>Active Friends List</h2>
                <ul>{this.findAllFriends()}</ul>
              </div>
            </div>
            <button className='btn btn-outline-primary'>
              Send Daily Fact!
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default AuthHome;
