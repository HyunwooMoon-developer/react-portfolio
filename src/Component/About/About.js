import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about-page">
        <h2>About Me</h2>
        <div className="about-text">
          <h3>"There is no end to learning!"</h3>
          <p>I always live with these words in my heart.</p>
          <p>
            I have always enjoyed doing new things and having experiences and
            loved learning.
          </p>
          <p>
            While programming, I come up with new ideas and take the initiative
            to solve problems.
          </p>
          <p>I finally graduated from Thinkful Academy successfully</p>
          <p>
            I am a full-stack web developer of the future and tomorrow will be
            more advanced than today!
          </p>
          <br />
          <p>I love to hang out with people and like to think creatively.</p>
          <p>I also love watching movies and going on trips!</p>
          <br />
          <p>
            I have a lot of hunger for discussing with my colleagues, developing
            programs, managing them, and learning new skills.
          </p>
          <p>
            I look forward to the opportunity to learn and do more while
            working.
          </p>
          <p>
            First of all, I'm thinking about how I've done my best here, rather
            than how long I'm going to work!!
          </p>
        </div>
      </div>
    );
  }
}

export default About;
