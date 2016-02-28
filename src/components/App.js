import React from 'react'
import Navbar from './Navbar'

export default function App(props) {
  return (
    <div className="app">
      <Navbar />
      {props.children}
    </div>
  )
}