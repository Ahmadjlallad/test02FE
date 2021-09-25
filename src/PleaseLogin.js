import React, { Component } from "react";
import { Card } from "react-bootstrap";
import LoginButton from "./Login";

class PleaseLogin extends Component {
  render() {
    return (
      <Card style={{ width: "auto" }}>
        <Card.Body>
          <Card.Title>Please Login</Card.Title>
          <Card.Text>
            <LoginButton />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default PleaseLogin;
