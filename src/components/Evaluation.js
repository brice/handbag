var React = require('react');

function Evaluation(props) {
  return(
    <div className="evaluation">
      <span className="evaluationTitle">
        {props.title}
      </span> : 
      <span className="evaluationDae">
        {props.date}
      </span>
      {props.children}
    </div>
  )  
}

module.exports = Evaluation;