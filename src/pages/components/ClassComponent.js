import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };
  }

  render() {
    return (
      <div>
        <h3>Class Component</h3>
        <div>Number: {this.state.number}</div>
        <Button
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          Increase
        </Button>
      </div>
    );
  }
}
