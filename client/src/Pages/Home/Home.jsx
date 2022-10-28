import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import SignUp from "../../components/SignUp";
const Home = () => {
  return (
    <>
    <div className="divHome">
      <Container>
        <Row>
          <Col>
            <h1>I'm Hariom Mahato</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 style={{color:"#FF1E1E",textDecoration:'underline'}}>Full Stack Developer</h5>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Home;
