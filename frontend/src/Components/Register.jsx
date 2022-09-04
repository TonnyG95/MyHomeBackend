import React from "react";
import { Container, Row, Col, Button, Spinner, Form } from "react-bootstrap";

function Register() {
  return (
    <Row className="text-center">
      <Col
        className="bg-dark text-light text-center py-5"
        xs={12}
        md={3}
        lg={3}
        xl={3}
      >
        {" "}
        <h5>Thank you for registration</h5>{" "}
      </Col>

      <Col className="my-4" xs={12} md={9} lg={9} xl={9}>
        <Form className="px-5 box" >
        <h1 className="m-4">Registration Page</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required />
            <Form.Text className="text-muted">
              Please create strong password
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" required />
            <Form.Text className="text-muted">Confirm your password</Form.Text>
          </Form.Group>
           
            <Button className='mx-1' variant="success" type="submit">
                Submit
            </Button>
            <Button className='mx-1' variant="danger" type="reset">
                Clear
            </Button>
          
        </Form>
      </Col>
    </Row>
  );
}

export default Register;
