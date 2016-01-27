var React = require('react');

var Evaluation = React.createClass({
  render: function () {
    return(
      <div className="evaluation">
        <span className="evaluationTitle">
          {this.props.title}
        </span> : 
        <span className="evaluationDae">
          {this.props.date}
        </span>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Evaluation;