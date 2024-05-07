import React, { Component } from 'react'
import B6Child from './B6Child';

export default class B6 extends Component<{},{status:string}> {
    constructor(props:{}){
        super(props);
        this.state={
            status:"Interface Rendering"
        }
    }
    changeProp=()=>{
        this.setState({
            status:"Close the form"
        })
    }
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{ status: string; }>, nextContext: any): boolean {
        return false;
    }
  render() {
    return (
      <div>
        <B6Child status={this.state.status} />
        <button onClick={this.changeProp}>Change props</button>
      </div>
    )
  }
}
