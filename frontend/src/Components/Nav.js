import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom'

import { LinkContainer } from 'react-router-bootstrap'


function Nav() {
  return (
    <Navbar>
      <Container>
      <LinkContainer to="/"> 
        <Navbar.Brand>MyHome</Navbar.Brand>
        </LinkContainer>

        
       
      
        <Link to="/login" className='mx-2'>Login</Link>
      

      
        <Link to="/listings" className='mx-2'>Listings</Link>
     
       
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;