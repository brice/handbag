var React = require('react');
var Evaluation = require('./Evaluation.js');

var EvaluationList = React.createClass({
  render: function() {
    var evaluationNodes = this.props.data.map(function(evaluation) {
      return(
        <Evaluation title={evaluation.title} key={evaluation.id} date={evaluation.date} />
      );
    });

    return (
      <div className="evaluationList">
        {evaluationNodes}
      </div>
    );
  }
});

module.exports = EvaluationList;