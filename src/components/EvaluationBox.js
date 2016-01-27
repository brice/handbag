var React = require('react');
var EvaluationList = require('./EvaluationList.js');
var EvaluationForm = require('./EvaluationForm.js');

var EvaluationBox = React.createClass({
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
    var newEvaluations = evaluationsList.concat();
    this.setState({data: newEvaluations});
    if (window.Storage) {
      window.localStorage.setItem('evaluationsIndex', window.JSON.stringify(value));
    } else {
      this.setState({data: evaluationsList});
    }
  },
  getInitialState: function(){
    return {data: []};
  },
  componentDidMount: function() {
    this.loadEvaluations();
    setInterval(this.loadEvaluations, this.props.pollInterval)
  },
  render: function() {
    return (
      <div className="evaluationBox">
        <h1>Evaluations</h1>
        <EvaluationList data={this.state.data}/>
        <EvaluationForm onEvaluationSubmit={this.handleEvaluationSubmit}/>
      </div>
    );
  }
});


module.exports = EvaluationBox;