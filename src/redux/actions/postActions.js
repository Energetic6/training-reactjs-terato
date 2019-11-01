import { GET_POSTS } from "./type";
import axios from "axios";

export const getPost = () => dispatch => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
      dispatch({ type: GET_POSTS, payload: response.data });
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });
};
