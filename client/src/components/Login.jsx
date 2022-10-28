import React from "react";
import Form from "react-bootstrap/form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";

const Login = () => {
  return (
    <>
      <Container className="mt-5">
        <Row style={{ textAlign: "center" }}>
          <Col sm="12">
            <h1>Welcome ,Login Here</h1>
          </Col>
        </Row>

        <Row style={{ width: "60%", margin: "auto" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Your Email Here</Form.Label>
              <Form.Control type="email" placeholder="Your Email here" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </Form.Group>

            <Button variant="link" type="submit" style={{ color: "#FF1E1E" }}>
              LogIn
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default Login;
