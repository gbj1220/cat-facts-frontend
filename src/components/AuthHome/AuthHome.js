import React, { Component } from "react";

import "./AuthHome.css";

class AuthHome extends Component {
  render() {
    return (
      <div>
        <img
          src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fsp9VjRjvV7s%2Fmaxresdefault.jpg&f=1&nofb=1'
          class='img-fluid'
          alt='...'
        ></img>
        <div className='row'>
          <div className='col-lg-4'>
            <h2>Friends List</h2>
            <p>
              <ul class='list-group'>
                <li class='list-group-item active' aria-current='true'>
                  An active item
                </li>
                <li class='list-group-item'>A second item</li>
                <li class='list-group-item'>A third item</li>
                <li class='list-group-item'>A fourth item</li>
                <li class='list-group-item'>And a fifth one</li>
              </ul>
            </p>
            <p>
              <a className='btn btn-secondary' href='#'>
                View details »
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthHome;
