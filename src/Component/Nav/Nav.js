import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/project'}>Project</Link>
            </li>
            <li>
              <Link to={'/contact'} className="nav-contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
