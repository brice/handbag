import React from 'react'
import { render } from 'react-dom'

import { Router, Route, Link } from 'react-router'

const Classroom = React.createClass({
  render() {
    return(
      <div class="classRoom">
        Classroom
      </div>
    )
  }
});
  
const Skills = React.createClass({
  render() {
    return(
      <div class="Skills">
        skills
      </div>
    )
  }
});

const App = React.createClass({
  render() {
    return (
      <div class="navBar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/classrooom">Gestion des classes</Link></li>
          <li><Link to="/skills">Gestion des Compétences</Link></li>
        </ul>
      </div>
      <div>
        <h1>HandBag</h1>
        {this.props.children}
      </div>
    )
  }
});

render((
  <Router>
    <Route path="/" component={App}>
      <Route path="classroom" component={Classroom} />
      <Route path="skills" component={Skills} />
    </Route>
  </Router>
), document.body)