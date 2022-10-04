import React, { Component } from "react";

class UseEffectClass extends Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    console.log("didMount")
  }

  componentDidUpdate(){
    console.log("didUpdate");
  }

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
export default UseEffectClass;
