/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import './Intro.css';

export default class intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="intro-left">
          <div className="intro-left-wrap">
            <h2 className="intro-intro">Hello, My name is</h2>
            <h1 className="intro-name">Hyunwoo Moon</h1>
            <div className="intro-title">
              <div className="intro-title-wrap">
                <div className="intro-title-item">Web Developer</div>
                <div className="intro-title-item">Front-End Developer</div>
                <div className="intro-title-item">Back-End Developer</div>
                <div className="intro-title-item">Fast Learner</div>
                <div className="intro-title-item">Creative Person</div>
              </div>
            </div>
            <p className="intro-description">
              I am a Full Stack Web Developer with Front-End(HTML, CSS,
              JavaScript, React) and Back-End(RESTFul APIs, Node.js, Express.js,
              PostgreSQL).
              <br />
              <br />I have always enjoyed doing new things and having
              experiences, and I loved learning.
            </p>
          </div>
        </div>
        <div className="intro-right">
          <div className="intro-bg"></div>
        </div>
      </div>
    );
  }
}
