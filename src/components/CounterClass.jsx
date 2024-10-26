import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleReset = () => {
    this.setState({
      count: 0,
    });
  };
  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Counter : {this.state.count}</h2>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleReset}>0</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default CounterClass;
