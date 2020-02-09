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

function App() {
  return (
    <Router>
      <nav className="header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bio">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">My Work</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/bio">
          <Bio />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
      <Contact />
    </Router>
  );
}

export default App;
