import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Card from './Card'

function Home() {
  return (
    <>
    <Container >
    <Row className='text-center '><h1>Welcome to my Home</h1> <Button className='btn btn-success my-4'>Latest Listings</Button></Row>
    </Container>
    <Row className='text-centar mx-5'>
      <Col className="bg-dark text-light text-center py-5" xs={12} md={5} lg={5} xl={5}> <h5>Locations</h5> </Col>
      <Col className="bg-danger py-5 text-center" xs={12} md={7} lg={7} xl={7}>Listings</Col>
    </Row>
    
    

    </>
  )
}

export default Home