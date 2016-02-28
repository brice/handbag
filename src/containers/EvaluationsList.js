import React from 'react'
import { getIndex } from '../models/Evaluations'
import EvaluationLink from '../components/EvaluationLink'

class EvaluationsList extends React.Component {
  constructor(props) {
    super(props)
    const evaluationsIndex = getIndex()
    this.state = {index: evaluationsIndex}
  }

  render() {
    const evaluationNodes = this.state.index.map((evaluation) => {
      return <li key={evaluation.class}><EvaluationLink classId={evaluation.class} dates={evaluation.dates}/></li>
    })

    return (
      <div>
      List of evaluations
      <ul>
      {evaluationNodes}
      </ul>
      </div>
    )
  }
}

export default EvaluationsList