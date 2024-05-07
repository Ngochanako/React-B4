import React, { Component } from 'react'

export default class B5Child extends Component<{status:string}> {
  render() {
    return (
      <div>
        <h2>Status:{this.props.status}</h2>
      </div>
    )
  }
}
