import React from 'react'
import SummonerName from './SummonerName.jsx'
import Champions from './Champions.jsx'
import MasteryIcons from './MasteryIcons.jsx'
import axios from 'axios'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      summonerName: '',
      champions: [],
      mIcons: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e) {
    e.preventDefault()
    this.setState({input: e.target.value})
  }

  handleSubmit(e) {
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
      })
      .catch('error client side requesting user data')
  }

  render() {
    return (
      <div>

        <SummonerName name={this.state.summonerName} />
        <Champions champs={this.state.champions} />
        <MasteryIcons icons={this.state.mIcons} />
        
        <form>
          <input type='text' placeholder='Enter summoner name' onChange={this.handleInputChange} ></input>
        </form>
        <button onClick={this.handleSubmit}> Submit </button>

      </div>
    )
  }
}