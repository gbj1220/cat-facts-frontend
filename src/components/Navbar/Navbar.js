import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";

function Navbar(props) {
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='#'>
              Carousel
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
                  <a className='nav-link active' aria-current='page' href='#'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Link
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link disabled'
                    href='#'
                    tabIndex={-1}
                    aria-disabled='true'
                  >
                    Disabled
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
