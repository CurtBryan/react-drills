import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  handleChange(value) {
    this.setState({
      message: value
    });
  }

  render() {
    return (
      <div className="App">
        <section>
          <input onChange={event => this.handleChange(event.target.value)} />
          <p>{this.state.message}</p>
        </section>
      </div>
    );
  }
}

export default App;
