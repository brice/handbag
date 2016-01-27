var React = require('react');
var ReactDOM = require('react-dom');

var EvaluationBox = require('./components/EvaluationBox.js');

ReactDOM.render(
  <EvaluationBox pollInterval={2000}/>,
  document.getElementById('content')
);