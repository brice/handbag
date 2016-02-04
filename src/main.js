var React = require('react');
var ReactDOM = require('react-dom');

var data = [
  {id: 1, title: "Evaluation Toto", date: "13/11/2015"},
  {id: 2, title: "Evaluation titi", date: "14/11/2015"}
];

function EvaluationBox(props) {
  return (
    <div className="evaluationBox">
      <h1>Evaluations</h1>
      <EvaluationList data={props.data}/>
      <EvaluationForm />
    </div>
  );
}

function EvaluationList(props) {
  var evaluationNodes = props.data.map(function(evaluation) {
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

var EvaluationState = {
  title: '',
  date: '',
  saveTitle: function(e) {
    console.log(e.target.value)
  },
  saveDate: function(e) {
    console.log(e.target.value)
  },
  registerDate: function() {

  }
}


function EvaluationForm(props) {
  return(
    <form className="commentForm">
      <label>Titre</label>
      <input type="text" placeholder="Titre de l'évaluation" onChange={EvaluationState.saveTitle} value={EvaluationState.title}/>
      <label>Date</label>
      <input type="date" placeholder="Date de l'évaluation" onChange={EvaluationState.saveDate} value={EvaluationState.date} />
      <button value="Ajouter évaluation" onClick={EvaluationState.registerDate}/>
    </form>
  );  
}



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
  );
}

ReactDOM.render(
  <EvaluationBox data={data}/>,
  document.getElementById('content')
);