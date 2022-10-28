import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup"; 
import Button from "react-bootstrap/Button";
import "./About.css";

const About = () => {
  return (
    <>
      <Container className="aboutMainContainer">
        <Row style={{ textAlign: "center" }}>
          <Col sm="12">
            <h1 >About Me</h1>
          </Col>
        </Row>

        <Row>
          <Col sm="12"  >
            <CardGroup className="aboutCardGroup" >
              <Card className="aboutImgHolder"  style={{height:"17rem",borderRadius:'1.3rem'}}>
              </Card>
              <Card style={{border:'none'}}>
                <Card.Body>
                  <Card.Title style={{ color: "#FF1E1E" }}>I'm Hariom Mahato</Card.Title>
                  <Card.Text>
                  <h6>I am a Fulll Stack Developer Worked as A fullsack developer on diffent project</h6>
                  </Card.Text>

                  <Button variant="link" style={{ color: "#FF1E1E" }}>Contact Me</Button>
                  <Button variant="link" style={{ color: "#400D51" }}>Download CV</Button>
                </Card.Body>
              
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
