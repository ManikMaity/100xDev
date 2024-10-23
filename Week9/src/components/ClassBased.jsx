import React, { Component } from "react";

export default class ClassBased extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>InCrease</button>
      </>
    );
  }
}
