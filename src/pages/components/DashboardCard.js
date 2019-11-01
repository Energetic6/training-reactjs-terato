import React, { Component } from "react";
import { Card, Spinner } from "react-bootstrap";

export class DashboardCard extends Component {
  render() {
    return (
      <Card style={{ padding: "20" }}>
        <Card.Body>
          <Card.Title>
            {this.props.numbers.length > 0 ? (
              this.props.numbers.length
            ) : (
              <Spinner animation="border" size="sm" />
            )}
          </Card.Title>
          <Card.Text>{this.props.title}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default DashboardCard;
