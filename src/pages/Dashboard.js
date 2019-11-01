import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

import DashboardCard from "./components/DashboardCard";
import NavBar from "./components/NavBar";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: [],
      albums: [],
      photos: []
    };
  }

  componentDidMount() {
    this.getPost();
    this.getComments();
    this.getAlbums();
    this.getPhotos();
  }

  getPost = () => {
    let _this = this;
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(response) {
        _this.setState({
          posts: response.data
        });

        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  getComments = () => {
    let _this = this;
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(function(response) {
        _this.setState({
          comments: response.data
        });

        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  getAlbums = () => {
    let _this = this;
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then(function(response) {
        _this.setState({
          albums: response.data
        });

        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  getPhotos = () => {
    let _this = this;
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(function(response) {
        _this.setState({
          photos: response.data
        });

        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Row>
            <Col>
              <h1>Dashboard</h1>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <DashboardCard numbers={this.state.posts} title="Posts" />
            </Col>
            <Col md={3}>
              <DashboardCard numbers={this.state.comments} title="Comments" />
            </Col>
            <Col md={3}>
              <DashboardCard numbers={this.state.albums} title="Albums" />
            </Col>
            <Col md={3}>
              <DashboardCard numbers={this.state.photos} title="Photos" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
