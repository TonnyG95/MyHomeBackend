import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Footer() {




  return (
    <footer>
      <Row className='bg-dark py-3'>
      <Container>
        <Row>
          
          <Col xs={12} sm={12} md={4} lg={4} xl={4} className='text-light text-center mt-5'>

            <h5>About us</h5>

          <p className='px-2'>MyHome is Ireland leading property portal, featuring thousands of houses and apartments to buy and rent all across Ireland.

          At MyHome.ie, you will find a wide selection of new homes, rentals, shared accommodation, holiday homes and overseas properties, so whatever type of property you are interested in, yoy will find it at MyHome.ie.</p>
          
          </Col>

          <Col xs={12} sm={12} md={4} lg={4} xl={4} className="text-center text-light py-3 mt-5">

          Copyright &copy; My Home
          
          </Col>

          <Col xs={12} sm={12} md={4} lg={4} xl={4} className='text-center'>

          <h5 className='text-light mt-5'> Follow us on socials </h5>
          <a href="https://www.facebook.com/MyHome.ie" target="_blank"><i className=" text-light  mt-4 social-icon fa-brands fa-facebook"></i></a>
          <a href="https://twitter.com/myhomeproperty" target="_blank"><i className=" text-light  mt-4 social-icon fa-brands fa-twitter"></i></a>
          <a href="https://www.instagram.com/MyHome.ie/" target="_blank"><i className=" text-light  mt-4 social-icon fa-brands fa-instagram"></i></a>
         
          
          </Col>
        
        </Row>
      </Container>
      </Row>
    </footer>
  )
}

export default Footer