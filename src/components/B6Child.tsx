import React, { Component } from 'react'

export default class B6Child extends Component<{status:string}> {
  render() {
    return (
      <div>
        <h2>Message:{this.props.status}</h2>
      </div>
    )
  }
}
