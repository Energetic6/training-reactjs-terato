import React, { Component } from "react";

export class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      name: props.name ? props.name : "Abu",
      data: props.data
    };
  }

  componentDidMount() {
    let _this = this;
    setTimeout(function() {
      _this.setState({ number: 300 });
    }, 3000);
  }

  render() {
    let name = this.props.data.map(data => <p>{data.name}</p>);
    return (
      <div>
        Number: {this.state.number} Name: {this.state.name}
        {name}
      </div>
    );
  }
}

export default State;
