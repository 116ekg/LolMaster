import React from 'react'

export default class History extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='col-sm-10 col-sm-offset-1 text-center'>

        {this.props.matches.map((match, i) => 
          (
            <img className='historyRow' src={match.icon}></img>
          )
        )}

      </div>
    )
  }
}