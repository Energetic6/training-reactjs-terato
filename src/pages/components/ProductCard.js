import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import axios from "axios";

import Products from "../Products";

export class ProductCard extends Component {
  handleDelete = productId => {
    let _this = this;
    axios
      .delete("http://192.168.4.21/bumipro/public/api/products/" + productId)
      .then(function(response) {
        _this.props.getProduct();
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <Card style={{ marginTop: 10 }}>
        <Card.Img variant="top" src={this.props.thumbnailUrl} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.body}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{this.props.category}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button
            variant="danger"
            onClick={() => this.handleDelete(this.props.productId)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default ProductCard;
