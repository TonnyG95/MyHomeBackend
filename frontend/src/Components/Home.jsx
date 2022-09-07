import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Card from './Cards'


function Home() {
  return (
    <>
    <Container >
    <Row className='text-center mt-4'><h1>Welcome to myHome</h1> <h4>Find your new home in minutes</h4>
    </Row>
    <Container className='text-center my-4'> <Link to='/login'><button className='btn btn-success'>Login <i class="fa-solid fa-right-to-bracket"></i></button></Link>  or <Link to='/listings'><button className='btn btn-success'>  Start searching <i class="fa-solid fa-arrow-right"></i></button></Link> </Container>
    <Container className='text-center text-muted'> <h5>Do you have property to sell? if yes</h5> </Container>
    <Container className='text-center my-4' > <Link to='/add-property'><button className='btn btn-primary'>Add your Property</button> </Link> </Container>
    
    </Container>
    <Row className='text-center'>
      <Col className="bg-dark text-light text-center py-5" xs={12} md={5} lg={5} xl={5}> <h5>Locations</h5> </Col>
      <Col className="bg-danger py-5 text-center" xs={12} md={7} lg={7} xl={7}>Listings</Col>
    </Row>
    
    

    </>
  )
}

export default Home