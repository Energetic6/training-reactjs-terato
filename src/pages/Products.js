import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Spinner,
  Button,
  Modal,
  Form
} from "react-bootstrap";
import axios from "axios";

import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
      products: {
        data: []
      },
      isLoading: true,
      isShow: false,
      name: "",
      description: "",
      validated: false
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  nextPage = () => {
    this.setState(
      {
        pageNumber: this.state.pageNumber + 1,
        products: {
          data: []
        }
      },
      this.getProducts
    );
  };

  prevPage = () => {
    this.setState(
      {
        pageNumber: this.state.pageNumber - 1,
        products: {
          data: []
        }
      },
      this.getProducts
    );
  };

  getProducts = () => {
    let _this = this;
    axios
      .get(
        "http://192.168.4.21/bumipro/public/api/products?page=" +
          _this.state.pageNumber
      )
      .then(function(response) {
        _this.setState({
          products: response.data
        });

        console.log(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  handleClose = () => {
    this.setState({
      isShow: false
    });
  };

  handleOpen = () => {
    this.setState({
      isShow: true,
      validated: false,
      name: "",
      description: ""
    });
  };

  handleSubmit = event => {
    this.setState({ validated: true });

    if (this.handleValidation()) {
      let _this = this;
      axios
        .post("http://192.168.4.21/bumipro/public/api/products", {
          name: this.state.name,
          description: this.state.description
        })
        .then(function(response) {
          _this.getProducts();
          _this.setState({ isShow: false });
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  handleValidation = () => {
    return !(this.state.name === "" || this.state.description === "");
  };

  render() {
    let product = this.state.products.data.map(product => {
      return (
        <Col key={product.id} md={3}>
          <ProductCard
            title={product.name}
            body={"RM" + product.price_from + " - " + product.price_to}
            thumbnailUrl={product.cover_image}
            category={product.product_category.name}
            productId={product.id}
            getProduct={this.getProducts}
          />
        </Col>
      );
    });

    return (
      <div>
        <NavBar />
        <Container>
          <h2>Products</h2>
          <Row>
            <Col>
              <Button variant="primary" onClick={this.handleOpen}>
                Add
              </Button>
            </Col>
          </Row>
          <Row>
            {this.state.products.data.length > 0 ? (
              product
            ) : (
              <Col style={{ marginTop: 20 }}>
                <div className="justify-content-center">
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              </Col>
            )}
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col>
              {this.state.products.current_page === 1 ? (
                <Button variant="primary" disabled style={{ marginRight: 20 }}>
                  Prev
                </Button>
              ) : (
                <Button
                  variant="primary"
                  disabled={this.state.products.data.length <= 1}
                  onClick={this.prevPage}
                  style={{ marginRight: 20 }}
                >
                  Prev
                </Button>
              )}

              {this.state.products.to === this.state.products.total ? (
                <Button variant="primary" disabled>
                  Next
                </Button>
              ) : (
                <Button
                  variant="primary"
                  disabled={this.state.products.data.length <= 1}
                  onClick={this.nextPage}
                >
                  Next
                </Button>
              )}
            </Col>
          </Row>

          {/* Add new product modal */}
          <Modal show={this.state.isShow} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add new product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form noValidate validated={this.state.validated}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Product Name"
                    required
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    onChange={e =>
                      this.setState({ description: e.target.value })
                    }
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={event => this.handleSubmit(event)}
              >
                Add Product
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </div>
    );
  }
}

export default Products;
