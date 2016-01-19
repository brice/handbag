

var EvaluationBox = React.createClass({
  render: function() {
    return (
      <div className="evaluationBox">
        <h1>Evaluations</h1>
        <EvaluationList />
        <EvaluationForm />
      </div>
    );
  }
});

var EvaluationList = React.createClass({
  render: function() {
    return (
      <div className="evaluationList">
        <Evaluation title="Evaluation toto" date="12/11/2015" />
        <Evaluation title="Evaluation titi" date="13/11/2015" />
      </div>
    );
  }
});

var EvaluationForm = React.createClass({
  render: function () {
    return(
      <div className="evaluationForm">
        Formulaire d'ajout d'évaluation
      </div>
    );
  }
});

var Evaluation = React.createClass({
  render: function() {
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
    );
  }
});

ReactDOM.render(
  <EvaluationBox />,
  document.getElementById('content')
);