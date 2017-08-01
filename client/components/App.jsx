import React from 'react'
import SummonerName from './SummonerName.jsx'
import Champions from './Champions.jsx'
import History from './History.jsx'
import axios from 'axios'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      summonerName: '',
      champions: [],
      champNames: [],
      matches: [],
      matchChamps: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getChampNames = this.getChampNames.bind(this)
    this.getMatchChamps = this.getMatchChamps.bind(this)
  }

  handleInputChange(e) {
    e.preventDefault()
    this.setState({input: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({summonerName: this.state.input})

    // Get user and champion mastery data
    axios.post('/getMastery', {
      username: this.state.input
    })
      .then(result => {
        let tempArr = []
        for (let i = 0; i < 5; i++) {
          tempArr.push(result.data[i])
        }
        this.setState({champions: tempArr})

        // Assign champID's returned to champion names
        this.getChampNames()

        // Get the last 20 matches played
        axios.post('/getHistory', {
          username: this.state.input
        })
          .then(response => {
            this.setState({matches: response.data.matches})

            // Assign champID's to icons for match history
            this.getMatchChamps()
          })
      })
      .catch('error client side requesting user data')

    // axios.post('/getLiveMatch', {
    //   username: this.state.input
    // })
    //   .then(result => {
    //     console.log(result.data)
    //   })
  }

  getMatchChamps() {
    let tempArr = []
    let count = 0
    for (let i = 0; i < this.state.matches.length; i++) {
      count++
      axios.post('/api/champion/addChampionId', {
        champId: this.state.matches[i].champion
      })
        .then(result => {
          tempArr.push(result.data)
          if (count === this.state.matches.length) {
            this.setState({matchChamps: tempArr})
          }
        })
    }
  }

  getChampNames() {
    let tempArr = []
    let count = 0
    for (let i = 0; i < this.state.champions.length; i++) {
      count++
      axios.post('/api/champion/addChampionId', {
          champId: this.state.champions[i].championId
        }
      )
        .then(result => {
          result.data.championLevel = this.state.champions[i].championLevel
          result.data.masteryPoints = this.state.champions[i].championPoints
          tempArr.push(result.data)
          if (count === 5) {
            this.setState({champNames: tempArr})
          }
        })
    }
  }

  render() {
    return (
        <div className='container'>

          <div className="row">
            <div className="col-sm-6 col-sm-offset-3 text-center">
              <h1 id="logo">Master Rank</h1>
            </div>
          </div>

          <div className="row">
            <div className='col-sm-4 col-sm-offset-4 text-center'>
              <SummonerName name={this.state.summonerName} />
            </div>
          </div>

          <Champions champs={this.state.champNames} />
          
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3 text-center">
              <form className="form-group" onSubmit={this.handleSubmit}>
                <input type='text' className="form-control text-center" placeholder='Enter summoner name' onChange={this.handleInputChange} ></input>
              </form>
            </div>
          </div>

          <div className='row'>
            <History matches={this.state.matchChamps} />
          </div>

        </div>
    )
  }
}