import React from 'react'
import SummonerName from './SummonerName.jsx'
import Champions from './Champions.jsx'
import axios from 'axios'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      summonerName: '',
      champions: [],
      champNames: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getChampNames = this.getChampNames.bind(this)
  }

  handleInputChange(e) {
    e.preventDefault()
    this.setState({input: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({summonerName: this.state.input})
    axios.post('/pingUsername', {
      username: this.state.input
    })
      .then(result => {
        let tempArr = []
        for (let i = 0; i < 5; i++) {
          tempArr.push(result.data[i])
        }
        this.setState({champions: tempArr})
        this.getChampNames()
      })
      .catch('error client side requesting user data')
  }

  getChampNames() {
    let tempArr = []
    let count = 0
    for (let i = 0; i < this.state.champions.length; i++) {
      count++
      axios.post('/api/champion/addChampion', {
          champId: this.state.champions[i].championId
        }
      )
        .then(result => {
          result.data.championLevel = this.state.champions[i].championLevel
          tempArr.push(result.data)
          if (count === 5) {
            this.setState({champNames: tempArr})
            console.log(this.state.champNames)
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

      </div>
    )
  }
}