import React, { Component } from 'react'
interface User{
    username:string,
}
export default class B1 extends Component<{},User> {
    constructor(props:{}){
        super(props);
        this.state={
            username:"nguyên"
        }
    }
    componentWillMount(): void {  
        console.log('willmount');
            
    }
    componentDidMount(): void {
        console.log('didmount');       
    }
  render() {
    return (
      <div>
        {this.state.username};
      </div>
    )
  }
}
