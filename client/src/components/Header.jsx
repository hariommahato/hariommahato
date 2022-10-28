import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
// import LinkContainer from 'react-bootstrap/LinkContainer';

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={NavLink} to='/' style={{ color: "black" }}>Hariom Mahato</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/about" style={{ color: "black" }}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/project" style={{ color: "black" }}>
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to='/contact' style={{ color: "black" }}>Contact</Nav.Link>
            <Button variant="link" style={{ color: "#FF1E1E" }}>
              Logout
            </Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
