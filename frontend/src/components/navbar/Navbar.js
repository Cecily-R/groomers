import "./Navbar.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";


const Navigation = () => {

    return (
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="/">Groomers</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/login">Log In</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }

export default Navigation;