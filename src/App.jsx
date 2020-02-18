import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/home/Home';
import Bio from './components/bio/Bio';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';

import './styles/header.scss';
import Contact from './components/contact/Contact';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
  }

  render() {
    return (
      <Router>
        <nav className={!this.state.clicked ? "header" : "responsive header"} >
          <ul>
            <li>
              <Link onClick={this.startAnimation.bind(this)} to="/">Home</Link>
            </li>
            <li>
              <Link onClick={this.startAnimation.bind(this)} to="/bio">About</Link>
            </li>
            <li>
              <Link onClick={this.startAnimation.bind(this)} to="/skills">Skills</Link>
            </li>
            <li>
              <Link onClick={this.startAnimation.bind(this)} to="/projects">My Work</Link>
            </li>
          </ul>
          <div className={!this.state.clicked ? "container icon" : "icon container change"} onClick={this.startAnimation.bind(this)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Bio />
          </Route>
          <Route path="/about">
            <Skills />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
        <Contact />
      </Router>
    );
  }


  startAnimation() {
    this.setState({
      clicked: !this.state.clicked
    });
  }
}

export default App;
