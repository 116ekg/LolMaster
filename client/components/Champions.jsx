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
            <p>{champ.championId} --- {champ.championLevel}</p>
            </div>
            )
        )}
      </div>
    )
  }
}