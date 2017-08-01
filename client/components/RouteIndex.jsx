import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App.jsx'
import ChampionPage from './ChampionPage.jsx'

export default class RouteIndex extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>

        <div>
          <Route exact path='/' component={App} />
          <Route path='/:champName' component={ChampionPage} />
        </div>

      </Router>
    )
  }
}