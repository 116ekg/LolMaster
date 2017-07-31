import React from 'react'

export default class Champions extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.champs.map((champ, i) => 
          (<div>
            <p>{champ.championId}</p>
            </div>
            )
        )}
        {this.props.names.map((name, i) => 
          (<div>{name}</div>)
        )}
      </div>
    )
  }
}