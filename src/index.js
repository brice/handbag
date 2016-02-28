import React from 'react'
import { render } from 'react-dom'

import { Router, Route, Link, IndexRoute, browserHistory} from 'react-router'

import App from './components/App'
import Evaluations from './components/Evaluations'
import EvaluationsList from './containers/EvaluationsList'
import Evaluation from './containers/Evaluation'

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="evaluations" component={Evaluations}>
        <IndexRoute component={EvaluationsList} />
        <Route path=":classId/:date" component={Evaluation} />
      </Route>
    </Route>
  </Router>,
  document.getElementById('content')
)