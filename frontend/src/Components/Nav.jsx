import React, {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, Container, Row, NavDropdown  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { Link, Navigate } from "react-router-dom";
import Axios from 'axios';

// Contexts 
import StateContext from '../Contexts/StateContext';
import DispatchContext from '../Contexts/DispatchContext';



function Navigation() {
  const GlobalState = useContext(StateContext)
  const GlobalDispatch = useContext(DispatchContext)

  async function HandleLogout(){
   try {
    const response = await Axios.post("https://8000-tonnyg95-myhome-2864quj0ulx.ws-eu64.gitpod.io/api-auth-djoser/token/logout/", GlobalState.userToken, {headers: {Authorization : 'Token '.concat(GlobalState.userToken)}})
    console.log(response)
    GlobalDispatch({ type: 'logout'})
    Navigate('/')
   } catch(e){
    console.log(e.response)
   }
  }

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

            <LinkContainer to="/agencies">
              <Nav.Link> <i class="fa-solid fa-building"></i> Agencies</Nav.Link>
            </LinkContainer>



            <LinkContainer to="/add-property">
              <Nav.Link> <i class="fa-solid fa-house-medical"></i> Add Property</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/">
            {GlobalState.userIsLogged ? <Nav.Link onClick={HandleLogout}> <i class="fa-solid fa-user"></i> Logout</Nav.Link> :<Nav.Link> <Link className='no-decoration text-light' to='/login'><i class="fa-solid fa-user"></i> Login</Link> </Nav.Link> }
            </LinkContainer>

            <LinkContainer to="/profile">
            {GlobalState.userIsLogged ?  <Nav.Link> Hi {GlobalState.userUsername} </Nav.Link> : <Nav.Link>  </Nav.Link> }
            </LinkContainer>

            <LinkContainer to="/profile">
            {GlobalState.userIsLogged ?   <Nav.Link className='no-decoration text-light' > Your Profile </Nav.Link>  : <Nav.Link>  </Nav.Link> }
            </LinkContainer>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;