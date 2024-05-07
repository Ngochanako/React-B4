import React, { Component } from 'react'

export default class B3 extends Component<{},{name:string}> {
    constructor(props:{}){
        super(props);
        this.state={
            name:'Rikkei Academy',
        }
    }
    handleClick=()=>{
        this.setState({name:"Rikkeisoft"})
    }
  render() {
    return (
      <div>
        <h2>Company: {this.state.name}</h2>
        <button onClick={this.handleClick}>Change State</button>
      </div>
    )
  }
}
