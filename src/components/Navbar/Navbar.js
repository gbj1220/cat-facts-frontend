import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <header className='p-3 bg-dark text-white'>
            <div className='container'>
              <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
                <a
                  href='/'
                  className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'
                >
                  <svg className='bi me-2' width={40} height={32}>
                    <use xlinkHref='#bootstrap' />
                  </svg>
                </a>
                <>
                  <NavLink
                    className='btn btn-outline-primary'
                    activeStyle={{ color: "yellow" }}
                    to='/sign-up'
                  >
                    Sign up
                  </NavLink>

                  <NavLink
                    className='btn btn-outline-primary'
                    activeStyle={{ color: "yellow" }}
                    to='/login'
                  >
                    Login
                  </NavLink>
                </>
              </div>
            </div>
          </header>
        </div>
        ;
      </div>
    );
  }
}

export default Navbar;
