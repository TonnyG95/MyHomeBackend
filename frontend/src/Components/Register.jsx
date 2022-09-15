import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { useImmerReducer } from "use-immer";
import { ToastContainer, toast } from 'react-toastify';

function Register() {

  const navigate = useNavigate()

  function AccCreated(props) {
    toast.success(props)
   
  }

  function ErrorMsg(props) {
    toast.error(props)
   
  }


  const initialState = {
    usernameValue: "",
    emailValue: "",
    passwordValue: "",
    password2Value: "",
    sendRequest: 0,
    usernameErrors: {
			hasErrors: false,
			errorMessage: "",
		},
		emailErrors: {
			hasErrors: false,
			errorMessage: "",
		},

    passwordErrors: {
			hasErrors: false,
			errorMessage: "",
		},

    password2HelperText: "",
    serverMessageUsername: "",
    serverMessageEmail: ""

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
				if (action.password2Chosen !== draft.passwordValue) {
					draft.password2HelperText = "The passwords must match";
				} else if (action.password2Chosen === draft.passwordValue) {
					draft.password2HelperText = "";
				}
				break;
    case 'changeSendRequest':
        draft.sendRequest = draft.sendRequest +1;
        break
            
      
			case "catchUsernameErrors":
				if (action.usernameChosen.length === 0) {
					draft.usernameErrors.hasErrors = true;
					draft.usernameErrors.errorMessage = "This field must not be empty";
				} else if (action.usernameChosen.length < 5) {
					draft.usernameErrors.hasErrors = true;
					draft.usernameErrors.errorMessage =
						"The username must have at least five characters";
				} else if (!/^([a-zA-Z0-9]+)$/.test(action.usernameChosen)) {
					draft.usernameErrors.hasErrors = true;
					draft.usernameErrors.errorMessage =
						"This field must not have special characters";
				}
				break;

			case "catchEmailErrors":
				if (
					!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
						action.emailChosen
					)
				) {
					draft.emailErrors.hasErrors = true;
					draft.emailErrors.errorMessage = "Please enter a valid email!";
				}
				break;

        case "catchPasswordErrors":
				if (action.passwordChosen.length < 8) {
					draft.passwordErrors.hasErrors = true;
					draft.passwordErrors.errorMessage =
						"The password must at least have 8 characters!";
				}
				break;

        
         
    }
  }

  const [state, dispatch] = useImmerReducer(ReducerFuction, initialState);

  function FormSubmit(e) {
		e.preventDefault();

		if (
			!state.usernameErrors.hasErrors &&
			!state.emailErrors.hasErrors &&
			!state.passwordErrors.hasErrors &&
			state.password2HelperText === ""
		) {
			dispatch({ type: "changeSendRequest" });
		}
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
            { cancelToken: source.token },
            
          );

          console.log(response);
          navigate('/login')
          AccCreated('Account Created, You can now log in')
        } catch (error) {
          console.log(error.response);
          if (error.response.data.username){
            dispatch({type: 'usernameExists'})
            ErrorMsg('Username Exists')

          } else if (error.response.data.email){
            dispatch({type: 'emailExists'})
            ErrorMsg('Email Exists')
          } else if (error.response.data.password[0] === 'The password is too similar to the username.' ){
            dispatch({type: 'similarPassword'})
            ErrorMsg('The password is too similar to the username.')
          }else if (error.response.data.password[0] === 'This password is too common.' ) {
            dispatch({type: 'commonPassword'})
            ErrorMsg('This password is too common.')
          } else if ((error.response.data.password[0] === 'This password is entirely numeric.' )){
            dispatch({type: 'numericPassword'})
            ErrorMsg('This password is entirely numeric')
          } 
          
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
              onBlur={(e) => dispatch({type: 'catchUsernameErrors', usernameChosen: e.target.value})}
              type="text"
              placeholder="Enter your username"
              error={state.usernameErrors.hasErrors ? true : false}
              required
						 
            />
          </Form.Group>

          
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={state.emailValue}
              onChange={(e) => dispatch({type: 'catchEmailChange', emailChosen: e.target.value})}
              onBlur={(e) => dispatch({type: 'catchEmailErrors', emailChosen: e.target.value})}
              type="email"
              placeholder="Enter email"
              error={state.emailErrors.hasErrors ? true : false}
              required
						  
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
              onBlur={(e) =>
                dispatch({
                  type: "catchPasswordErrors",
                  passwordChosen: e.target.value,
                })
              }
              error={state.passwordErrors.hasErrors ? true : false}
              required
             
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
              helperText={state.password2HelperText}
              required
              
            />
            <Form.Text className="text-muted">Confirm your password</Form.Text>
          </Form.Group>

          <Button className="mx-1" variant="success" type="submit">
            Submit
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
