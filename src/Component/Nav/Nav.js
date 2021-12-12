import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../../image/logo.png';

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to={'/'}>
          <img src={logo} alt="home" className="logo" />
        </Link>

        <nav>
          <ul>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/project'}>Project</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
