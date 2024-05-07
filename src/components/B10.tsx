import React, { Component } from 'react'

export default class B10 extends Component<{},{cnt:number}> {
    constructor(props:{}){
        super(props);
        this.state={
            cnt:0
        }
    }
    componentDidMount(): void {
        setInterval(()=>this.setState({cnt:this.state.cnt==10?0:this.state.cnt+1}),1000)
    }
  render() {
    return (
      <div>
        Count:{this.state.cnt}
      </div>
    )
  }
}
