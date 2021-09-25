import axios from "axios";
import React, { Component } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import ModalAndForm from "./ModalAndForm";
class UserChocolates extends Component {
  state = { userChocolates: [] };
  getUserChocolates = () => {
    axios
      .get(
        `https://secondtestfortheexam.herokuapp.com/user?email=${this.props.auth0.user.email}`
      )
      .then((res) => this.setState({ userChocolates: res.data }))
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.getUserChocolates();
  }
  deleteChocolateFromTheCart = (id) => {
    axios
      .delete(`https://secondtestfortheexam.herokuapp.com/user/${id}`)
      .then((res) => {
        this.getUserChocolates();
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  updateChocolate = (id, update) => {
    axios
      .put(`https://secondtestfortheexam.herokuapp.com/user/${id}`, update)
      .then((res) => {
        this.getUserChocolates();
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  renderUserChocolates = () => {
    console.log(this.state.userChocolates);
    return this.state.userChocolates.map((chocolate) => {
      return (
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={chocolate.imageUrl}
              alt={chocolate.title}
            />
            <Card.Body>
              <Card.Title> {chocolate.title}</Card.Title>
              <Card.Text>{chocolate.description}</Card.Text>
              <Card.Text>❤: {chocolate.numHearts}</Card.Text>
              <Card.Text>📸: {chocolate.numViews}</Card.Text>
              <Card.Text>🤑: {chocolate.price}</Card.Text>
              <Button
                variant="primary"
                onClick={() => this.deleteChocolateFromTheCart(chocolate._id)}
              >
                Delete this from the Cart
              </Button>
              <ModalAndForm
                chocolate={chocolate}
                updateChocolate={this.updateChocolate}
              />
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };
  render() {
    return this.renderUserChocolates();
  }
}

export default withAuth0(UserChocolates);
