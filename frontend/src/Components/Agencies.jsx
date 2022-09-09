import React, {useEffect, useState, useContext} from 'react'
import { Row, Col, Button, Form, Container, Card, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useImmerReducer } from "use-immer";
import Axios from 'axios';

// Contexts
import StateContext from "../Contexts/StateContext";

function Agencies() {

    const GlobalState = useContext(StateContext)

    const navigate = useNavigate()

    const initialState = {
        dataIsLoading: true,
        agenciesList: [],
      };
    
      function ReducerFuction(draft, action) {
        // eslint-disable-next-line default-case
        switch (action.type) { 
              case 'catchAgencies':
                draft.agenciesList = action.agenciesArray
                break;

                case 'loadingDone':
                    draft.dataIsLoading = false
                    break
    
        }
      }
      

      const [state, dispatch] = useImmerReducer(ReducerFuction, initialState);

      useEffect(()=>{
        async function GetAgencies(){
          try {
            const response = await Axios.get(`https://8000-tonnyg95-myhome-2864quj0ulx.ws-eu64.gitpod.io/api/profiles/`);
            console.log(response.data)
            dispatch({type: 'catchAgencies', agenciesArray: response.data })
            dispatch({ type: "loadingDone"})
          } catch(e){
            console.log(e.response)
          }
        }
        GetAgencies()
      },[])

      if (state.dataIsLoading === true ){
        return  <div className="container text-center my-5 p-4"> <Spinner animation="border" /></div>;
      }  

      

  return (
    <div>
        {state.agenciesList.map(agency=>{
            if (agency.agency_name && agency.phone_number)
           
            return (
                <Container>
                    
                    
                    <Row > 
                    
                        <Col className='flexi'>
                 
                        
                            <Card>
                            <Card.Img variant="top" src={agency.profile_picture ? agency.profile_picture : 'https://res.cloudinary.com/dsq1kzjdy/image/upload/v1662651727/media/No-Image-Placeholder.svg_bgopvn.png' }/>
                            <Card.Body>
                            <Card.Title>{agency.agency_name }</Card.Title>
                            <Card.Text>
                            {agency.bio.substring(0,100)}...
                            </Card.Text>

                            <Card.Text>
                            Listings: x
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                       
                        </Col>
                            

                    
                    </Row>
                </Container>
            )
        })}
    </div>
  )
}

export default Agencies