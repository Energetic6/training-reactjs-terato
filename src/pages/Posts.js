import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

import NavBar from "./components/NavBar";
import PostCard from "./components/PostCard";

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    let _this = this;
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(response) {
        _this.setState({
          posts: response.data
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
        <Container style={{ paddingTop: 20 }}>
          <h2>Posts</h2>
          {this.state.posts.map(item => {
            return (
              <PostCard key={item.id} title={item.title} body={item.body} />
            );
          })}
        </Container>
      </div>
    );
  }
}

export default Posts;
