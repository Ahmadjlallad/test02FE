import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Profile from "./Profile";
import "bootstrap/dist/css/bootstrap.min.css";
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              {" "}
              <Home />{" "}
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
