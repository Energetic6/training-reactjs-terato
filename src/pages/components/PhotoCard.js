import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export class PhotoCard extends Component {
  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.props.thumbnailUrl} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.body}</Card.Text>
          <Button variant="primary" href={this.props.url} target="_blank">
            Full Resolution
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default PhotoCard;
