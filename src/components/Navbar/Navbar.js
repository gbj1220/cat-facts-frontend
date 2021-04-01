import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";

function Navbar(props) {
  return (
    <div>
      <header>
        <nav
          className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'
          id='navbar'
        >
          <div className='container-fluid'>
            <a
              className='navbar-brand'
              href='/auth-home'
              style={{ fontFamily: "fantasy" }}
            >
              CAT FACTS
            </a>
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
            <div className='collapse navbar-collapse' id='navbarCollapse'>
              <ul className='navbar-nav me-auto mb-2 mb-md-0'>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='#'
                    style={{ fontFamily: "monospace" }}
                  >
                    About Us
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='#'
                    style={{ fontFamily: "monospace" }}
                  >
                    How To Use
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='/add-friend'
                    style={{ fontFamily: "monospace" }}
                  >
                    Add A Friend
                  </a>
                </li>
              </ul>
              <form className='d-flex'>
                <input
                  className='form-control me-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                />
                <Link
                  className='btn btn-outline-light'
                  to='/login'
                  onClick={props.handleUserLogout}
                  style={{
                    backgroundColor: "salmon",
                    color: "white",
                    fontWeight: "bold",
                    borderStyle: "solid",
                    borderWidth: "2px",
                    borderColor: "salmon",
                  }}
                >
                  LogOut
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
