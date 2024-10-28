/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */

import { Component } from "react";

class Child extends Component {
  //page load hunu agi variable ready garxa
  constructor() {
    super();
    debugger;
    console.log("Inside Child Component Constructor!");
    this.state = { childData: 1 };
  }
  // right after render function is called
  componentDidMount() {
    debugger;
    console.warn("ComponentDidMount -> Child component render for first time!");
  }
  // component get updated
  componentDidUpdate(prevState, prevProps) {
    if (
      prevProps.parentData != this.props.parentData ||
      prevState.childData != this.state.childData
    ) {
      debugger;
      console.warn("Child Component was updated!");
    }
  }
  multiply = () => {
    this.setState({ childData: this.state.childData * 2 });
    console.log(this.state.childData * 2);
  };
  render() {
    debugger;
    console.warn("Render -> Child render function!");
    return (
      <div>
        <h1>Child Component:</h1>
        <p>Parent State: {this.props.parentData}</p>
        <p>Child State: {this.state.childData}</p>
        <button
          onClick={() => {
            this.multiply();
          }}
        >
          Increase Child Data
        </button>
      </div>
    );
  }
}
export default Child;
