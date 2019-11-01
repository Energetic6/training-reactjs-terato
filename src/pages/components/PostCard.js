import React, { Component } from "react";
import { Card } from "react-bootstrap";

export class PostCard extends Component {
  render() {
    return (
      <Card style={{ margin: 5 }}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.body}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default PostCard;
