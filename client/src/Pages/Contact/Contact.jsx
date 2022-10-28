import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import './Contact.css'
const Contact = () => {
  return (
    <>
      <Container className="contactMainContainer">
      <Row style={{ textAlign: "center" }}>
          <Col sm="12">
            <h1>Hey,Get In Touch Me</h1>
          </Col>
        </Row>

        <Row>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Your Name Here</Form.Label>
        <Form.Control type="text" placeholder="Enter name here" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Your Email Here</Form.Label>
        <Form.Control type="email" placeholder="Your Email here" />
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Control as="textarea" placeholder="Leave a comment here" />
      </Form.Group>

      <Button variant="link" type="submit" style={{ color: "#FF1E1E" }}>
        Submit
      </Button>
    </Form>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
