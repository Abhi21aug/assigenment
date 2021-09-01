import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
      <Link className='navbar-brand' to='/'>
        dashboard
      </Link>

      <div className='collapse navbar-collapse' id='navbarCollapse'>
        <ul className='navbar-nav mr-auto justify-content-end'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/editTask'>
              <i className='fa fa-home'></i> Create Task
            </Link>
          </li>
          <li className='nav-item active'>
            <Link className='nav-link' to='/viewTasks'>
              <i className='fa fa-eye'></i> View task
            </Link>
          </li>
          <li className='nav-item active'>
            <Link className='nav-link' to='/jokes'>
              <i className='fa fa-eye'></i> Jokes
            </Link>
          </li>
          <li className='nav-item active bg-white rounded-pill'>
            <Link className='nav-link text-danger' onClick={logout}>Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const logout = () => {
  localStorage.clear();
  window.location.reload();
};

export default Header;
