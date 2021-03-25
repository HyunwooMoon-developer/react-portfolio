import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Project from "../Project/Project";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/project" component={Project} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
        <footer>
          <p>&copy; Hyunwoo Moon 2021</p>
        </footer>
      </div>
    );
  }
}

export default App;
