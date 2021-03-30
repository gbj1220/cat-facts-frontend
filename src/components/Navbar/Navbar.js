import React, { Component } from "react";

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

                <div className='text-end'>
                  <button type='button' className='btn btn-outline-light me-2'>
                    Login
                  </button>
                  <button type='button' className='btn btn-warning'>
                    Sign-up
                  </button>
                </div>
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
