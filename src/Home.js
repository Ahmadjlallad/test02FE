import axios from "axios";
import React, { Component } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import PleaseLogin from "./PleaseLogin";
export class Home extends Component {
  state = { allChocolates: [] };
  componentDidMount() {
    axios
      .get(`https://secondtestfortheexam.herokuapp.com/allChocolateData`)
      .then((res) => {
        this.setState({ allChocolates: res.data });
      })
      .catch((err) => console.log(err));
  }
  addTheChocolateToCart = (chocolate) => {
    axios
      .post(`https://secondtestfortheexam.herokuapp.com/user`, chocolate)
      .catch((err) => console.log(err));
  };
  renderAllChocolatesCards = () => {
    const {
      user: { email },
    } = this.props.auth0;
    return this.state.allChocolates.map((chocolate) => {
      return (
        <Col key={chocolate._id}>
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
                onClick={() =>
                  this.addTheChocolateToCart({ ...chocolate, email })
                }
              >
                Add this chocolate to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };
  render() {
    const { isAuthenticated } = this.props.auth0;
    return isAuthenticated ? (
      <Container>
        <Row xs={2}>{this.renderAllChocolatesCards()}</Row>
      </Container>
    ) : (
      <PleaseLogin />
    );
  }
}

export default withAuth0(Home);
