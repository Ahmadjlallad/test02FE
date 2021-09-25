import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
class ModalAndForm extends React.Component {
  state = { show: false };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                const title = e.target.elements.title.value;
                const description = e.target.elements.description.value;
                const numHearts = e.target.elements.numHearts.value;
                const numViews = e.target.elements.numViews.value;
                const price = e.target.elements.price.value;
                this.props.updateChocolate(this.props.chocolate._id, {
                  ...this.props.chocolate,
                  title,
                  description,
                  numHearts,
                  numViews,
                  price,
                });
                this.handleClose();
              }}
            >
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>title</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.chocolate.title}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label>description</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.chocolate.description}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="numHearts">
                <Form.Label>numHearts</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.chocolate.numHearts}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="numViews">
                <Form.Label>numViews</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.chocolate.numViews}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>price</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.chocolate.price}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ModalAndForm;
