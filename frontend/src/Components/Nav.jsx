import React, {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, Container, Row, NavDropdown  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios';


// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Contexts 
import StateContext from '../Contexts/StateContext';
import DispatchContext from '../Contexts/DispatchContext';


function LoggedOut(props) {
  toast.error(props)
   
  }


function Navigation() {
  const GlobalState = useContext(StateContext)
  const GlobalDispatch = useContext(DispatchContext)
  const navigate = useNavigate()

  async function HandleLogout(){
   try {
    const response = await Axios.post("/api-auth-djoser/token/logout/", GlobalState.userToken, {headers: {Authorization : 'Token '.concat(GlobalState.userToken)}})
    console.log(response)
    
    
    GlobalDispatch({ type: 'logout'})
    navigate(0)
    LoggedOut('You are logged out')
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
              <Nav.Link> <i className="fa-solid fa-house"></i> Home Page</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/listings">
              <Nav.Link> <i className="fa-solid fa-house-laptop"></i> Listings</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/agencies">
              <Nav.Link> <i className="fa-solid fa-building"></i> Agencies</Nav.Link>
            </LinkContainer>


            <LinkContainer to="/add-property">
              <Nav.Link> <i className="fa-solid fa-house-medical"></i> Add Property</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/">
            {GlobalState.userIsLogged ? <Nav.Link onClick={HandleLogout}> <i className="fa-solid fa-user"></i> Logout</Nav.Link> :<Nav.Link> <Link className='no-decoration text-light' to='/login'><i className="fa-solid fa-user"></i> Login</Link> </Nav.Link> }
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