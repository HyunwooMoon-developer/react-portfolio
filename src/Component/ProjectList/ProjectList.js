import React, { Component } from 'react';
import MyProject from '../MyProject/MyProject';
import './ProjectList.css';
import { Store } from '../../Store/Store';

export default class ProjectList extends Component {
  render() {
    return (
      <div className="projects">
        <h2 className="project-title">Moon's Project</h2>
        <div className="project-list">
          {Store.map((item) => (
            <MyProject
              key={item.id}
              title={item.title}
              link={item.link}
              image={item.image}
              description={item.description}
              skills={item.skills}
            />
          ))}
        </div>
      </div>
    );
  }
}
