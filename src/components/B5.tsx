import React, { Component } from 'react'
import B5Child from './B5Child';

export default class B5 extends Component<{},{status:string}> {
    constructor(props:{}){
        super(props);
        this.state={
            status:"Open the form"
        }
    }
    changeProp=()=>{
        this.setState({
            status:"Close the form"
        })
    }
  render() {
    return (
      <div>
        <B5Child status={this.state.status} />
        <button onClick={this.changeProp}>Change props</button>
      </div>
    )
  }
}
