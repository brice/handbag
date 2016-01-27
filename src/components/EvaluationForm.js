var React = require('react');

var EvaluationForm = React.createClass({
  getInitialState: function() {
    return {title: '', date: ''};
  },
  handleTitleChange: function(e){
    this.setState({title: e.target.value});
  },
  handleDateChange: function(e){
    this.setState({date: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var title=this.state.title.trim();
    var date=this.state.date.trim();
    if (! title || ! date) {
      return;
    }
    this.props.onEvaluationSubmit({title: title, date: date});
    this.setState({title: '', date:''});
  },
  render: function() {
    return(
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <label>Titre</label>
        <input 
          type="text" 
          placeholder="Titre de l'évaluation"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <label>Date</label>
        <input 
          type="date" 
          placeholder="Date de l'évaluation" 
          value={this.state.date}
          onChange={this.handleDateChange}
        />
        <input type="submit" value="Ajouter évaluation" />
      </form>
    );  
  }
});

module.exports = EvaluationForm;
