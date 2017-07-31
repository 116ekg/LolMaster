import React from 'react'

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
              <img className="champRow" src={champ.icon}></img>
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