var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

function App(props) {
  return (
    <div className="app">
      <h1>App</h1>
      <ul>
        <li><Link to="/adminEvaluation">Admin Evaluation</Link></li>
        <li><Link to="/notation">Notation</Link></li>
      </ul>
      {props.children}
    </div>
  );
}

module.exports = App;