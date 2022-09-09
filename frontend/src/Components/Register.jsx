import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { useImmerReducer } from "use-immer";

function Register() {

  const navigate = useNavigate()


  const initialState = {
    usernameValue: "",
    emailValue: "",
    passwordValue: "",
    password2Value: "",
    sendRequest: 0
  };

  function ReducerFuction(draft, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case "catchUsernameChange":
        draft.usernameValue = action.usernameChosen;
        break;
    case "catchEmailChange":
        draft.emailValue = action.emailChosen;
        break;
    case "catchPasswordChange":
        draft.passwordValue = action.passwordChosen;
        break;
    case "catchPassword2Change":
        draft.password2Value = action.password2Chosen;
        break;
        case 'changeSendRequest':
            draft.sendRequest = draft.sendRequest +1;
            break    
    }
  }

  const [state, dispatch] = useImmerReducer(ReducerFuction, initialState);


  function FormSubmit(e) {
    e.preventDefault();
    console.log("form subited");
    dispatch({type: 'changeSendRequest'});
  }

  useEffect(() => {
    const source = Axios.CancelToken.source();
    if (state.sendRequest) {
      async function SingUp() {
        try {
          const response = await Axios.post(
            "https://8000-tonnyg95-myhome-2864quj0ulx.ws-eu64.gitpod.io/api-auth-djoser/users/",
            {
              username: state.usernameValue,
              email: state.emailValue,
              password: state.passwordValue,
              re_password: state.password2Value,
            },
            { cancelToken: source.token }
          );

          console.log(response);
          navigate('/login')
        } catch (error) {
          console.log(error.response);
        }
      }
      SingUp();
      return () => {
        source.cancel();
      };
    }
  }, [state.sendRequest]);

  return (
    <Row className="text-center main ">
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
        <Form onSubmit={FormSubmit} className="px-5 box bg-light">
          <h1 className="m-4">Create an account</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={state.usernameValue}
              onChange={(e) => dispatch({type: 'catchUsernameChange', usernameChosen: e.target.value})}
              type="text"
              placeholder="Enter your username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={state.emailValue}
              onChange={(e) => dispatch({type: 'catchEmailChange', emailChosen: e.target.value})}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control placeholder="Password must contain uppercase, lowercase, numbers and symbols"
              value={state.passwordValue}
              onChange={(e) => dispatch({type: 'catchPasswordChange', passwordChosen: e.target.value})}
              type="password"
            />
            <Form.Text className="text-muted">
              Please create strong password
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control placeholder="Password must contain uppercase, lowercase, numbers and symbols"
              value={state.password2Value}
              onChange={(e) => dispatch({type: 'catchPassword2Change', password2Chosen: e.target.value})}
              type="password"
            />
            <Form.Text className="text-muted">Confirm your password</Form.Text>
          </Form.Group>

          <Button className="mx-1" variant="success" type="submit">
            Submit
          </Button>
          <Button className="mx-1" variant="danger" type="reset">
            Clear
          </Button>

          

          <h5 className="text-muted mt-5">Already have an account?</h5>
          <Link className=" no-decoration" to="/login">
            Log in here
          </Link>
        </Form>
      </Col>
    </Row>
  );
}

export default Register;
