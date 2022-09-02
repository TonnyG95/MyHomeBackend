import Button from 'react-bootstrap/Button';
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
  return (
    <Navbar bg="dark" className=" p-4 "variant="dark" expand="lg" collapseOnSelect>
      <Container fluid>
        <LinkContainer to="/">
        <Navbar.Brand>My Home</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link> <i class="fa-solid fa-house"></i> Home Page</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/listings">
              <Nav.Link> <i class="fa-solid fa-house-laptop"></i> Listings</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/">
              <Nav.Link> <i class="fa-solid fa-building-user"></i> Agencies</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/">
              <Nav.Link> <i class="fa-solid fa-house-medical"></i> Add Property</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/login">
              <Nav.Link> <i class="fa-solid fa-user"></i> Login</Nav.Link>
            </LinkContainer>
            
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;