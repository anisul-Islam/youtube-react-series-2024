import React, { Component } from 'react';

class ClassComponentDemo extends Component {
  render() {
    return (
      <h3>
        {this.props.message}, the number of message you have receieved :
        {this.props.numberOfMessage}
      </h3>
    );
  }
}

export default ClassComponentDemo;
