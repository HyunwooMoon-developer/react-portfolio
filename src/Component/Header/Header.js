import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <Link to={"/"}>Hyunwoo Moon</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/project"}>Project</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
