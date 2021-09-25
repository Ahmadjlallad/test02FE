import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
export class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    );
  }
}

export default withAuth0(Header);
