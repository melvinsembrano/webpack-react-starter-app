import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import Hello from './hello'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="World" />,
    document.body.appendChild(document.createElement('div')),
  )
})
