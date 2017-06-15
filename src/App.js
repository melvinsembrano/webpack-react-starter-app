import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.body.appendChild(document.createElement('div')),
  )
})
