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
    catFact: "",
  };

  findAllFriends = () => {
    try {
      return this.state.friendsArray.map((data) => {
        return (
          <ul>
            <li className='list-group-item'>
              {data.firstName} {data.lastName} {data.mobileNumber}
            </li>
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

  // getCatFact = async (req, res) => {
  //   try {
  //     const catFact = await axios.get(
  //       "https://cat-fact.herokuapp.com/facts/random"
  //     );
  //     const oneCatFact = catFact.data.text;
  //     res.json(oneCatFact);

  //     this.setState({
  //       catFact: oneCatFact,
  //     });
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };

  sendUserCatFact = async () => {
    // const { catFact } = this.state.catFact;
    // console.log(catFact);

    const allMobileNumbers = this.state.friendsArray.map(
      (item) => item.mobileNumber
    );

    const textInfo = {
      allMobileNumbers,
      // catFact,
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

    // console.log(allMobileNumbers);
  };

  render() {
    return (
      <div className='main-container'>
        {this.state.isLoading ? (
          <div style={{ textAlign: "center", fontSize: "2em" }}>...Loading</div>
        ) : (
          <div>
            <div
              style={{
                fontSize: "9em",
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "fantasy",
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
            <div className='row' id='friends-row'>
              <div className='col-lg-4' id='displayed-names'>
                <h2>Active Friends List</h2>
                <ul>{this.findAllFriends()}</ul>
              </div>
            </div>
          </div>
        )}
        <button
          onClick={this.sendUserCatFact}
          // onClick={this.getCatFact}
          className='btn btn-outline-primary'
          id='send-fact-btn'
        >
          Send <br />
          Fact
        </button>
      </div>
    );
  }
}

export default AuthHome;
