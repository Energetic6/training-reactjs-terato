import React, { Component } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Form,
  Spinner,
  Alert
} from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import NavBar from "./components/NavBar";
import API from "../Api";

const cookies = new Cookies();

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: false,
      email: "",
      password: "",
      redirect: false,
      validated: false
    };
  }

  componentDidMount() {
    if (cookies.get("_token")) {
      this.props.history.push("/dashboard");
    }
  }

  signIn = event => {
    this.setState({
      isLoading: true
    });

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({ validated: true });

    let _this = this;
    API.post("/api/login", {
      email: _this.state.email,
      password: _this.state.password
    })
      .then(function(response) {
        _this.setState({
          isLoading: false,
          error: false
        });
        cookies.set("_token", response.data.token);
        _this.props.history.push("/dashboard");

        console.log(response);
      })
      .catch(function(error) {
        console.log(error.response);

        _this.setState({
          isLoading: false,
          error: true
        });
      });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Header>Sign In</Card.Header>
                <Card.Body>
                  <Card.Title>Please sign in to continue</Card.Title>
                  {this.state.error ? (
                    <Alert variant={"danger"}>
                      Wrong username or password!
                    </Alert>
                  ) : null}
                  <Form noValidate validated={this.state.validated}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        required
                        onChange={value =>
                          this.setState({ email: value.target.value })
                        }
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        required
                        onChange={value =>
                          this.setState({ password: value.target.value })
                        }
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="button"
                      onClick={this.signIn}
                    >
                      {this.state.isLoading ? (
                        <Spinner animation="border" role="status" size="sm">
                          <span className="sr-only">Loading...</span>
                        </Spinner>
                      ) : (
                        "Sign In"
                      )}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(SignIn);
