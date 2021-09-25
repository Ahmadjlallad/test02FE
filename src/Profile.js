import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Container, Row } from "react-bootstrap";
import PleaseLogin from "./PleaseLogin";
import UserChocolates from "./UserChocolates";
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img src={user.picture} alt={user.name} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
        </Card.Body>
      </Card>
      <Row>
        <UserChocolates />
      </Row>
    </Container>
  ) : (
    <PleaseLogin />
  );
};

export default Profile;
