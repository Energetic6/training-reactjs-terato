import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookie = new Cookies();

export class NavBar extends Component {
  signOut = () => {
    cookie.remove("_token");
    this.props.history.push("/");
  };

  render() {
    return (
      <Navbar bg="light">
        <Navbar.Brand as={Link} to="/">
          My App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/posts">
              Posts
            </Nav.Link>
            <Nav.Link as={Link} to="/comments">
              Comments
            </Nav.Link>
            <Nav.Link as={Link} to="/albums">
              Albums
            </Nav.Link>
            <Nav.Link as={Link} to="/photos">
              Photos
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            {cookie.get("_token") ? (
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={this.signOut}>
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
