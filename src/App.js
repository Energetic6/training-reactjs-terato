import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "universal-cookie";

import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";
import Products from "./pages/Products";

const cookies = new Cookies();

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        cookies.get("_token") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
      }
    />
  );
};

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* Publice route */}
            <Route path="/" exact>
              <SignIn />
            </Route>

            {/* Private route */}
            <PrivateRoute path="/dashboard" exact>
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/posts" exact>
              <Posts />
            </PrivateRoute>
            <PrivateRoute path="/comments" exact>
              <Comments />
            </PrivateRoute>
            <PrivateRoute path="/albums" exact>
              <Albums />
            </PrivateRoute>
            <PrivateRoute path="/photos" exact>
              <Photos />
            </PrivateRoute>
            <PrivateRoute path="/products" exact>
              <Products />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
