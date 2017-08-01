import React from 'react'
import axios from 'axios'

export default class ChampionPage extends React.Component {
  constructor() {
    super()
    this.state = {
      championName: '',
      championId: '',
      championIcon: '',
      championSplash: '',
      championDesc: ''
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
          championSplash: result.data.splash,
          championDesc: result.data.desc
        })
      })
      .catch(err => {
        console.log('error in component did mount on championpage')
      })
  }

  render() {
    return (
      <div>
        <div className="container">

          <div className="row">
            <div className="col-sm-6 col-sm-offset-3 text-center">
              <h1 id='champPageHeader'>{this.state.championName}</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <img className="champSplash text-center" src={this.state.championSplash}></img>
            </div>
          </div>

        </div>
        <div class='container-fluid'>
          <div className="row">
            <div className='col-sm-12' id='descBox'>
              <h3 id='champDesc'>
                {this.state.championDesc}
              </h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}