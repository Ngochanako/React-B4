import React, { Component } from 'react';

export default class B9 extends Component<{},{time:Date}> {
    timerId:number|undefined
  constructor(props:{}) {
    super(props);
    this.state = {
      time: new Date(),
    }
}
  componentDidMount() {
    this.timerId = setInterval(
      () => this.setState({time:new Date()}),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    return (
      <div>
        <h2>Thời gian hiện tại:</h2>
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}