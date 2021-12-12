import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Nav from '../Nav/Nav';
import ProjectList from '../ProjectList/ProjectList';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<ProjectList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    );
  }
}
