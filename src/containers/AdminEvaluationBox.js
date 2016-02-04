var React = require('react');
var EvaluationList = require('../components/EvaluationList.js');
var EvaluationForm = require('../components/EvaluationForm.js');

var AdminEvaluationBox = React.createClass({
  loadEvaluations: function(){
    if (window.Storage) {
      this.setState({data: []});
      var value = window.JSON.parse(window.localStorage.getItem('evaluationsIndex'));
      if (value != false && value != null) {
        this.setState({data: value});
      }
    }
  },
  handleEvaluationSubmit: function(evaluation){
    var evaluationsList = this.state.data;
    evaluation.id = Date.now();
    var newEvaluations = evaluationsList.concat(evaluation);
    this.setState({data: newEvaluations});
    if (window.Storage) {
      window.localStorage.setItem('evaluationsIndex', window.JSON.stringify(newEvaluations));
    } else {
      this.setState({data: evaluationsList});
    }
  },
  getInitialState: function(){
    return {data: []};
  },
  componentDidMount: function() {
    this.loadEvaluations();
    // setInterval(this.loadEvaluations, this.props.pollInterval)
  },
  render: function() {
    return (
      <div className="adminEvaluationBox">
        <h1>Evaluations</h1>
        <EvaluationList data={this.state.data}/>
        <EvaluationForm onEvaluationSubmit={this.handleEvaluationSubmit}/>
      </div>
    );
  }
});


module.exports = AdminEvaluationBox;