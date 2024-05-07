import React, { Component } from 'react'

export default class B2 extends Component {
    componentDidMount(): void {
        console.log('Component đã được mount');        
    }
  render() {
    return (
      <div>
        Bài 2
      </div>
    )
  }
}
