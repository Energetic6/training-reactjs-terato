import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { getPost } from "../redux/actions/postActions";

import NavBar from "./components/NavBar";
import PostCard from "./components/PostCard";

export class Posts extends Component {
  componentDidMount() {
    this.props.getPost();
  }

  render() {
    return (
      <div>
        <NavBar />
        <Container style={{ paddingTop: 20 }}>
          <h2>Posts</h2>
          {console.log(this.props)}
          {this.props.posts.posts.map(item => {
            return (
              <PostCard key={item.id} title={item.title} body={item.body} />
            );
          })}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = {
  getPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
