import React, { Component } from "react";
import axios from "axios";

import NavBar from "./components/NavBar";
import PhotoCard from "./components/PhotoCard";
import { Container, Row, Col, Spinner } from "react-bootstrap";

export class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos = () => {
    let _this = this;
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(function(response) {
        _this.setState({
          photos: response.data
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

  render() {
    let photo = this.state.photos.map(photo => {
      return (
        <Col key={photo.id} md={3}>
          <PhotoCard
            title={photo.title}
            thumbnailUrl={photo.thumbnailUrl}
            url={photo.url}
          />
        </Col>
      );
    });

    return (
      <div>
        <NavBar />
        <Container>
          <h2>Photos</h2>
          <Row>
            {this.state.photos.length > 0 ? (
              photo
            ) : (
              <Col>
                <div className="justify-content-center">
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Photos;
