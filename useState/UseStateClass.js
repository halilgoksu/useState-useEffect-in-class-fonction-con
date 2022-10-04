import React, { Component } from "react";

class UseStateClass extends Component {
  state = {
    counter: 0,
  };

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <h2>Class Component </h2>
        <p>Counter :{this.state.counter}</p>
        <button onClick={() => this.increase()}>Increase</button>
      </div>
    );
  }
}
export default UseStateClass;
