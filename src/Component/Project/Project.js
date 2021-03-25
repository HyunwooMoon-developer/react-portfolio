/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  render() {
    return (
      <div className="project-page">
        <h2>Project</h2>
        <div className="project">
          <h3>Where Is My Money</h3>
          <div className="description">
            <p>This app can help figure out the flow of money.</p>
            <p>
              Through the income page, spending page, and reporting page,{" "}
            </p>
            <p>
              you can check how much money you make, how much you spend, and how
              much you save.
            </p>
            <h4>
              Using skills : Front-End(React), Back-End(Node.js, Express.js,
              PostgreSQL)
            </h4>
          </div>
          <button type="button">
            <a
              href="https://first-capstone-fuyh4yuta.vercel.app"
              target="_blank"
            >
              Live App
            </a>
          </button>{" "}
          <button type="button" target="_blank">
            <a
              href="https://github.com/HyunwooMoon-developer/Where-Is-My-Money.git"
              target="_blank"
            >
              Client Repo
            </a>
          </button>{" "}
          <button type="button" target="_blank">
            <a
              href="https://github.com/HyunwooMoon-developer/Where-Is-My-Money-server.git"
              target="_blank"
            >
              Server Repo
            </a>
          </button>
        </div>
        <div className="project">
          <h3>Pet Adopt</h3>
          <div className="description">
            <p>You can adopt dogs and cats through this app.</p>
            <p>
              Adopt this app first in, first out. Adoption is possible after the
              early adopter is over.
            </p>
            <p>
              Go to the adoption page, click the picture of the type of animal, and
              enter the name to prepare for adoption.
            </p>
            <h4>
              Using skills : Front-End(React), Back-End(Node.js, Express.js,
              PostgreSQL)
            </h4>
          </div>
          <button type="button">
            <a
              href="https://petful-client-template-sigma.vercel.app"
              target="_blank"
            >
              Live App
            </a>
          </button>{" "}
          <button type="button" target="_blank">
            <a
              href="https://github.com/HyunwooMoon-developer/petful-app.git"
              target="_blank"
            >
              Client Repo
            </a>
          </button>{" "}
          <button type="button" target="_blank">
            <a
              href="https://github.com/HyunwooMoon-developer/petful-server.git"
              target="_blank"
            >
              Server Repo
            </a>
          </button>
        </div>
        <div className="project">
          <h3>Korean Word Test</h3>
          <div className="description">
            <p>This app can help to test Korean words.</p>
            <p>
              Through this app, you can test words and check the score of each
              word
            </p>
            <h4>
              Using skills : Front-End(React), Back-End(Node.js, Express.js,
              PostgreSQL)
            </h4>
          </div>
          <button type="button">
            <a
              href="https://spaced-repetition-pj5jxyjdq-hyunwoomoon-developer.vercel.app/register"
              target="_blank"
            >
              Live App
            </a>
          </button>{" "}
          <button type="button" target="_blank">
            <a
              href="https://github.com/HyunwooMoon-developer/spaced-repetition-app.git"
              target="_blank"
            >
              Client Repo
            </a>
          </button>{" "}
          <button type="button" target="_blank">
            <a
              href="https://github.com/HyunwooMoon-developer/spaced-repetition-server.git"
              target="_blank"
            >
              Server Repo
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default Project;
