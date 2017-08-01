import React from 'react'
import axios from 'axios'

export default class ChampionPage extends React.Component {
  constructor() {
    super()
    this.state = {
      championName: '',
      championId: '',
      championIcon: '',
      championSplash: ''
    }
  }

  componentDidMount() {
    let champName = decodeURI(window.location.pathname.slice(1))
    axios.post('/api/champion/addChampionName', {
      name: champName
    })
      .then(result => {
        this.setState({
          championName: result.data.name,
          championId: result.data.champId,
          championIcon: result.data.icon,
          championSplash: result.data.splash
        })
      })
      .catch(err => {
        console.log('error in component did mount on championpage')
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 text-center">
            <h1 id='logo'>{this.state.championName}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-sm-offset-1">
            <img className="champSplash text-center" src={this.state.championSplash}></img>
          </div>
        </div>
      </div>
    )
  }
}