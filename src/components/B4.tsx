import React, { Component } from 'react'

export default class B4 extends Component <{},{slogan:string}>{
    constructor(props:{}){
        super(props);
        this.state={
            slogan:'Học code để đi làm'
        }
    }
    handleClick=()=>{
        this.setState({slogan:"abcjdcdjj"})
    }
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{ slogan: string; }>, nextContext: any): boolean {
        return false;
    }
  render() {
    return (
      <div>
        <h2>Slogan:{this.state.slogan}</h2>
        <button onClick={this.handleClick}>Change State</button>
      </div>
    )
  }
}
