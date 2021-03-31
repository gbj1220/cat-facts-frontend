import React, { Component } from "react";

import "./AuthHome.css";

class AuthHome extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-lg-6'>
          <svg
            className='bd-placeholder-img rounded-circle'
            width={140}
            height={140}
            xmlns='http://www.w3.org/2000/svg'
            role='img'
            aria-label='Placeholder: 140x140'
            preserveAspectRatio='xMidYMid slice'
            focusable='false'
          >
            <title>Placeholder</title>
            <rect width='100%' height='100%' fill='#777' id='hi' />
            <text x='50%' y='50%' fill='#777' dy='.3em'>
              140x140
            </text>
          </svg>
          <h2>Heading</h2>
          <p>PLACEHOLDER</p>
          <p>
            <a className='btn btn-secondary' href='#'>
              View details »
            </a>
          </p>
        </div>
        <div className='col-lg-6'>
          <svg
            className='bd-placeholder-img rounded-circle'
            width={140}
            height={140}
            xmlns='http://www.w3.org/2000/svg'
            role='img'
            aria-label='Placeholder: 140x140'
            preserveAspectRatio='xMidYMid slice'
            focusable='false'
          >
            <title>Placeholder</title>
            <rect width='100%' height='100%' fill='#777' />
            <text x='50%' y='50%' fill='#777' dy='.3em'>
              140x140
            </text>
          </svg>
          <h2>Heading</h2>
          <p>PLACEHOLDER</p>
          <p>
            <a className='btn btn-secondary' href='#'>
              View details »
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default AuthHome;
