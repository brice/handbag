import React from 'react'

import { Link } from 'react-router'

export default function EvaluationLink(props) {
  const classId = props.classId
  const linkNodes = props.dates.map(function(date) {
    const displayDate = new Date(date).toString() 
    return <li key={date}><Link to={`/evaluations/${classId}/${date}`}>{displayDate}</Link></li>
  });

  return (
    <div>
    {classId}
    <ul>
    {linkNodes}
    </ul>
    </div>
  )
}