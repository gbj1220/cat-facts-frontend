import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";

function Navbar(props) {
  return (
    <header>
      <nav
        className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'
        id='navbar'
      >
        <div className='container-fluid'>
          <NavLink
            className='navbar-brand'
            to='/auth-home'
            style={{ fontFamily: "cursive", fontWeight: "bold" }}
          >
            😺 CAT FACTS
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarCollapse'
            aria-controls='navbarCollapse'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>

          {props.user ? (
            <>
              <div className='collapse navbar-collapse' id='navbarCollapse'>
                <ul className='navbar-nav me-auto mb-2 mb-md-0'>
                  <NavLink
                    className='nav-link active'
                    style={{ fontFamily: "monospace", fontWeight: "bold" }}
                    to='auth-home'
                  >
                    About Us
                  </NavLink>

                  <NavLink
                    className='nav-link active'
                    to='how-to-use'
                    style={{ fontFamily: "monospace", fontWeight: "bold" }}
                  >
                    How To Use
                  </NavLink>

                  <NavLink
                    className='nav-link active'
                    to='/Add-Friend'
                    style={{ fontFamily: "monospace", fontWeight: "bold" }}
                  >
                    Add A Friend
                  </NavLink>
                </ul>

                <Link
                  className='nav-link active'
                  id='logout-button'
                  onClick={props.handleUserLogout}
                  style={{ fontFamily: "cursive", fontWeight: "bold" }}
                  to='login'
                >
                  Logout
                </Link>
              </div>
            </>
          ) : (
            <>
              <NavLink
                className='btn btn-outline-primary'
                id='sign-up-btn'
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
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
