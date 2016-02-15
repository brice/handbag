var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Router;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;

var App = require('./components/App.js');
var AdminEvaluationBox = require('./containers/AdminEvaluationBox.js');
var Notation = require('./components/Notation.js');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="adminEvaluation" component={AdminEvaluationBox} />
      <Route path="notation" component={Notation} />
    </Route>

  </Router>,
  document.getElementById('content')
);