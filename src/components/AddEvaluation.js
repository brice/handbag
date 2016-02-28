import React, { Component, PropTypes } from 'react'

export default class AddEvaluation extends Component {
	render() {
		return (
      <div>
        <form className="commentForm">
          <label>Titre</label>
          <input type="text" placeholder="Titre de l'évaluation" ref="title" />
          <label>Date</label>
          <input type="date" placeholder="Date de l'évaluation" ref="date" />
          <button value="Ajouter évaluation" onClick={e => this.handleClick(e)}/>
        </form>
      </div>
    )
	}

  handleClick(e) {
    const nodeTitle = this.refs.title
    const title = nodeTitle.value.trim()
    const nodeDate = this.refs.date
    const date = nodeDate.value.trim()
    this.props.onAddClick(text, date)
  }
}
 
AddEvaluation.propTypes = {
  onAddClick: PropTypes.func.isRequired
}