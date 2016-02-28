import React from 'react'
import { Link } from 'react-router'

export default function Navbar(props) {
  return (
    <ul>
      <li>
        <Link to="/evaluations">Evaluations</Link>
      </li>
    </ul>
  )
}