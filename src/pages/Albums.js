import React, { Component } from "react";
import axios from "axios";

import NavBar from "./components/NavBar";
import AlbumCard from "./components/AlbumCard";
import { Container } from "react-bootstrap";

export class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  getAlbums = () => {
    let _this = this;
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then(function(response) {
        _this.setState({
          albums: response.data
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
    return (
      <div>
        <NavBar />
        <Container>
          <h2>Albums</h2>
          <AlbumCard />
        </Container>
      </div>
    );
  }
}

export default Albums;
