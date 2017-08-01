import React from 'react'
import ReactDOM from 'react-dom'
import RouteIndex from './components/RouteIndex.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  (
    <BrowserRouter>
      <RouteIndex />
    </BrowserRouter>
  ), 
  document.getElementById('app')
)