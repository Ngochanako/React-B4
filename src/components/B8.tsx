import React, { Component } from 'react'

export default class B8 extends Component<{},{title:string}> {
    constructor(props:{}){
        super(props);
        this.state={
            title:''
        }
    }
    handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
       this.setState({title:e.target.value})
    }
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{ title: string; }>, snapshot?: any): void {
        document.title=this.state.title
    }
  render() {
    return (
      <div>
        <input onChange={this.handleChange} type="text" />
      </div>
    )
  }
}
