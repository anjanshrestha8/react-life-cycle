/* eslint-disable no-debugger */
import { Component } from "react";
import Child from "./Components/Child";
class App extends Component {
  //before landing into webpage
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    debugger;
    console.log("Inside Parent Component Constructor!");
  }
  componentDidUpdate(prevProps, prevState) {
    debugger;
    if (prevState != this.state.count) {
      console.log("Parent component is updated!");
    }
  }
  //component is mounted
  componentDidMount() {
    debugger;
    console.log(
      "ComponentDidMount -> Parent component render for the first time!"
    );
  }

  //increment function
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    debugger;
    console.log("Render -> Parent Render Function!");
    return (
      <div>
        <h1>Lets, Understand React Life Cycle:-</h1>
        <p>Parent Data : {this.state.count}</p>
        <button onClick={this.increment.bind(this)}>
          Increase Parent Data
        </button>

        <Child parentData={this.state.count}></Child>
      </div>
    );
  }
}
export default App;
