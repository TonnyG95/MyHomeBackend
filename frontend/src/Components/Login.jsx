import React from 'react'
import { Container, Row, Col, Button, Spinner, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Row className="text-center login-form justify-content-center align-items-center">

      <Col className="my-4" xs={12} md={9} lg={9} xl={9}>
        <Form className="px-5 box bg-light" >
        <h1 className="m-4">Login</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control id='name' type="text" placeholder="Enter your username" required />
          </Form.Group>

          

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control id='password' type="password" required />
            <Form.Text className="text-muted">
              Enter your password
            </Form.Text>
          </Form.Group>

          
           
            <Button className='mx-1' variant="success" type="submit">
                Log In
            </Button>
            <Button className='mx-1' variant="danger" type="reset">
                Clear
            </Button>

            <h5 className="text-muted mt-5">Don't have an account?</h5>
            <Link className=" no-decoration" to="/register">Create here</Link>
             
          
        </Form>
      </Col>
    </Row>
  );
}

export default Login