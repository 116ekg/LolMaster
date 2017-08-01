import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Champions extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className="col-sm-1"></div>
          {this.props.champs.map((champ, i) => 
            (<div className='col-sm-2'>
              <Link to={'/' + champ.name}>
                <img className="champRow" src={champ.icon}></img>
              </Link>
              </div>
            )
          )}
        </div>

        <div className='row'>
          <div className="col-sm-1"></div>
          {this.props.champs.map((champ, i) => 
          (<div className='col-sm-2'>
            <img className="iconRow" src={"/MasteryIcons/" + champ.championLevel + ".png"}></img>
            </div>
            )
        )}
        </div>
        
      </div>
    )
  }
}