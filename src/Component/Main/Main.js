/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import hyunwoo from "../../IMG/hyunwoo1.jpg";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="main-page">
        <div className="main-image">
          <img src={hyunwoo} />
        </div>
        <div className="main-text">
          <h2>Welcome to Hyunwoo's Portfolio</h2>
          <br />
          <p>
            I am a Full Stack Web Developer with Front-End(HTML, CSS,
            JavaScript, React) and Back-End(RESTFul APIs, Node.js, Express.js,
            PostgreSQL).
          </p>
          <p>
            I have always enjoyed doing new things and having experiences, and I
            loved learning.
          </p>
        </div>
      </div>
    );
  }
}

export default Main;
