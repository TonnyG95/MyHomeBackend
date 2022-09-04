import React, {useEffect, useState} from "react";
import { Container, Row, Col, Button, Spinner, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Axios from "axios";

function Register() {

    const [sendRequest, setSendRequest] = useState(false);
    const [usernameValue, setUsernameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [password2Value, setPassword2Value] = useState('');
  

    function FormSubmit(e){
        e.preventDefault();
        console.log('form subited')
        setSendRequest(!sendRequest);
    
    }


    useEffect(() => {
        const source = Axios.CancelToken.source();
        if (sendRequest){
            async function SingUp() {
                try {
                  const response = await Axios.post('https://8000-tonnyg95-myhome-2864quj0ulx.ws-eu63.gitpod.io/api-auth-djoser/users/', 
                  {
                      username: usernameValue,
                      email: emailValue,
                      password: passwordValue,
                      re_password: password2Value,
                  }, {cancelToken: source.token});
      
                  console.log(response)
                  
                } catch(error){
                  console.log(error.response)
                }
              }
              SingUp();
              return ()=>{
                source.cancel();
              }
        }
      },[sendRequest])



  return (
    <Row className="text-center ">
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

      <Col className="my-4 justify-content-center" xs={12} md={9} lg={9} xl={9}>
        <Form onSubmit={FormSubmit} className="px-5 box bg-light" >
        <h1 className="m-4">Create an account</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)} type="text" placeholder="Enter your username"  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={emailValue} onChange={(e) => setEmailValue(e.target.value)}  type="email" placeholder="Enter email"  />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} type="password"  />
            <Form.Text className="text-muted">
              Please create strong password
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control value={password2Value} onChange={(e) => setPassword2Value(e.target.value)} type="password"  />
            <Form.Text className="text-muted">Confirm your password</Form.Text>
          </Form.Group>
           
            <Button className='mx-1' variant="success" type="submit">
                Submit
            </Button>
            <Button className='mx-1' variant="danger" type="reset">
                Clear
            </Button>

            <h5 className="text-muted mt-5">Already have an account?</h5>
            <Link className=" no-decoration" to="/login">Log in here</Link>
             
          
        </Form>
      </Col>
    </Row>
  );
}

export default Register;
