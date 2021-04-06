import React, { Component } from "react";
import axios from "axios";

import "./AuthHome.css";

class AuthHome extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: null,
    isLoading: false,
    friendsArray: [],
  };

  findAllFriends = () => {
    try {
      return this.state.friendsArray.map((data, index) => {
        return (
          <ul key={index}>
            <div>
              <li className='list-group-item'>
                {data.firstName} {data.lastName}
                <div className='form-check'>
                  <button
                    className='btn btn-danger'
                    id='delete-btn'
                    onClick={this.deleteUserById.bind(data.key)}
                  >
                    Delete
                  </button>
                  <label
                    className='form-check-label'
                    htmlFor='flexCheckDefault'
                  ></label>
                  <button
                    onClick={this.sendUserCatFact}
                    className='btn btn-outline-primary'
                    id='send-fact-btn'
                  >
                    Send Fact
                  </button>
                </div>
              </li>
            </div>
          </ul>
        );
      });
    } catch (e) {
      console.log(e.message);
    }
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

  getCatFact = async () => {
    try {
      const catFact = await axios.get(
        "https://cat-fact.herokuapp.com/facts/random"
      );
      const oneCatFact = catFact.data.text;

      this.setState({
        catFact: oneCatFact,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  sendUserCatFact = async (event) => {
    event.preventDefault();
    const allMobileNumbers = this.state.friendsArray.map(
      (item) => item.mobileNumber
    );

    const catFact = await axios.get(
      "https://cat-fact.herokuapp.com/facts/random"
    );

    const oneCatFact = catFact.data.text;

    const textInfo = {
      allMobileNumbers,
      oneCatFact,
    };

    const jwtToken = localStorage.getItem("jwtToken");

    try {
      const payload = await axios.post(
        "http://localhost:3001/users/send-sms",
        textInfo,

        {
          headers: {
            authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      return payload;
    } catch (e) {
      console.log(e.message);
    }
  };

  deleteUserById = async (id) => {
    const jwtToken = localStorage.getItem("jwtToken");

    try {
      const deletedFriend = await axios.delete(
        `http://localhost:3001/friends/delete-friend/${id}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          data: {
            deletedFriend: deletedFriend,
          },
        }
      );

      const findNonDeletedPeople = this.state.friendsArray.filter((item) => {
        if (item !== deletedFriend) {
          return item;
        }

        this.setState({
          friendsArray: findNonDeletedPeople,
        });
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  render() {
    return (
      <div className='main-container'>
        {this.state.isLoading ? (
          <div>...Loading</div>
        ) : (
          <div>
            <div>
              <div
                style={{
                  fontSize: "10em",
                  display: "flex",
                  justifyContent: "space-around",
                  fontFamily: "fantasy",
                  width: "1700px",
                  marginLeft: "500px",
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

              <div className='row-lg-4' id='displayed-names'>
                <h2>Active Friends List</h2>
                <div>
                  <ul>{this.findAllFriends()}</ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AuthHome;
