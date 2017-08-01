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
      championDesc: '',
      championDifficulty: '',
      championAttack: '',
      championDefense: '',
      championMagic: '',
      allyTips: '',
      enemyTips: '',
      title: ''
    }
  }

  componentDidMount() {
    let champName = decodeURI(window.location.pathname.slice(1))
    let secondChampName = champName.replace(/'/g, '')
    secondChampName = champName.replace(/ /g, '')
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
    axios.post('/api/static/findStaticData', {
      name: secondChampName
    })
      .then(response => {
        this.setState({
          championDifficulty: response.data.difficulty,
          championAttack: response.data.attack,
          championDefense: response.data.defense,
          championMagic: response.data.magic,
          allyTips: response.data.allyTips,
          enemyTips: response.data.enemyTips,
          title: response.data.title
        })
        console.log(this.state)
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

          <div className='row'>
            <div className='col-sm-6 col-sm-offset-3 text-center'>
              <h3 id='title'> {this.state.title} </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <img className="champSplash text-center" src={this.state.championSplash}></img>
            </div>
          </div>

        </div>
        <div className='container-fluid' id='descBox'>

          <div className="row">
            <div className='col-sm-12'>
              <h3 id='champDesc'>
                {this.state.championDesc}
              </h3>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-1 col-sm-offset-2'>
              <img src='./icons/sword.png' className='icon' />
            </div>
            <div className='col-sm-1'>
              <h4> {this.state.championAttack} </h4>
            </div>
            <div className='col-sm-1 col-sm-offset-1'>
              <img src='./icons/shield.png' className='icon' />
            </div>
            <div className='col-sm-1'>
              <h4> {this.state.championDefense} </h4>
            </div>
            <div className='col-sm-1 col-sm-offset-1'>
              <img src='./icons/staff.png' className='icon' />
            </div>
            <div className='col-sm-1'>
              <h4> {this.state.championMagic} </h4>
            </div>
          </div>

          <div className='row'>

            <div className='col-sm-4 col-sm-offset-2 tips'>
              <h3>
                Ally Tip:
              </h3>
              <p className='tipText'>
                {this.state.allyTips}
              </p>
            </div>

            <div className='col-sm-4 tips'>
              <h3>
                Enemy Tip:
              </h3>
              <p className='tipText'>
                {this.state.enemyTips}
              </p>
            </div>

          </div>

        </div>
      </div>
    )
  }
}