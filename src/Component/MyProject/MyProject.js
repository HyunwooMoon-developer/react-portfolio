/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import './Myproject.css';

export default class Project extends Component {
  render() {
    const { title, image, description, skills, link } = this.props;
    return (
      <div className="project">
        <div className="project-browser">
          <div className="project-circle circle1"></div>
          <div className="project-circle circle2"></div>
          <div className="project-circle circle3"></div>
          <h3>{title}</h3>
        </div>
        <div className="project-img">
          <a href={link} target="_blank">
            <img src={image} alt={title} className="project-image" />
          </a>
        </div>
        <div className="project-desc">
          <h4>Description :</h4>
          <p>{description}</p>
          <h4>Skills :</h4>
          <p>{skills}</p>
        </div>
      </div>
    );
  }
}
