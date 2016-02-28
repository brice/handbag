import React from 'react'
import Navbar from './Navbar'

export default function App(props) {
  return (
    <div className="app">
      <Navbar />
      <h1>App</h1>
      {props.children}
    </div>
  )
}