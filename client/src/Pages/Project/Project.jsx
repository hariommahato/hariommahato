import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/esm/Button";
import "./Project.css";
const Project = () => {
  return (
    <>
      <Container className="projectMainContainer">
        <Row style={{ textAlign: "center" }}>
          <Col sm="12">
            <h1>Latest Projects</h1>
          </Col>
        </Row>

        <Row>
          <Col sm="12">
            <CardGroup>
              <Card className="m-2">
                <Card.Body>
                  <Card.Title>HotelBooking Frontend</Card.Title>
                  <Button variant="link" style={{ color: "#FF1E1E" }}>
                    View Demo
                  </Button>
                </Card.Body>
              </Card>
              <Card className="m-2">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Ktmtodo With React</Card.Title>
                  <Button variant="link" style={{ color: "#FF1E1E" }}>
                    View Demo
                  </Button>
                </Card.Body>
              </Card>
              <Card className="m-2">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Word Analyzer-React</Card.Title>
                  <Button variant="link" style={{ color: "#FF1E1E" }}>
                    View Demo
                  </Button>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Project;
