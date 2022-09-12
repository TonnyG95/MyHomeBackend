import React, {useEffect, useState, useContext} from 'react'
import { Row, Col, Button, Form, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useImmerReducer } from "use-immer";
import Axios from 'axios';

// Contexts
import StateContext from "../Contexts/StateContext";

function Profile() {

    const GlobalState = useContext(StateContext)

    
    const navigate = useNavigate()

    const initialState = {
        userProfile: {
          agencyName: '',
          phoneNumber: '',
          profilePic: '',
          bio: '',
          sellerId: '',
          sellerListings: []
        },
        agencyNameValue: '',
        phoneNumberValue: '',
        bioValue: '',
        uploadedPicture: [],
        profilePictureValue: '',
        sendRequest: 0,
        
      };
    
      function ReducerFuction(draft, action) {
        // eslint-disable-next-line default-case
        switch (action.type) { 
              case 'catchUserProfileInfo':
                draft.userProfile.agencyName = action.profileObject.agency_name;
                draft.userProfile.phoneNumber = action.profileObject.phone_number;
                draft.userProfile.profilePic = action.profileObject.profile_picture;
                draft.userProfile.bio = action.profileObject.bio
                draft.userProfile.sellerListings = action.profileObject.seller_listings
                draft.userProfile.sellerId = action.profileObject.seller
              break 

              case 'catchAgencyNameChange':
                draft.agencyNameValue = action.agencyNameChosen;
              break 

              case 'catchPhoneNumberChange':
                draft.phoneNumberValue = action.phoneNumberChosen;
              break 

              case 'catchBioChange':
                draft.bioValue = action.bioChosen;
              break 

              case 'catchUploadedPicture':
                draft.uploadedPicture = action.PictureChosen;
              break 

              case 'catchProfilePictureChange':
                draft.profilePictureValue = action.profilePictureChosen;
              break 

              case 'changeSendRequest':
                draft.sendRequest = draft.sendRequest +1;
                break
        
    
        }
      }
      

      const [state, dispatch] = useImmerReducer(ReducerFuction, initialState);

      // Catch Profile Picture

      useEffect(()=>{
        if (state.uploadedPicture[0]){
            dispatch({type: 'catchProfilePictureChange', profilePictureChosen: state.uploadedPicture[0]})
        }
      },[state.uploadedPicture[0]])

 










      // Request to get all profile info
      useEffect(()=>{
        async function GetProfileInfo(){
          try {
            const response = await Axios.get(`https://8000-tonnyg95-myhome-2864quj0ulx.ws-eu64.gitpod.io/api/profiles/${GlobalState.userId}`);
            console.log(response.data)
            dispatch({type: 'catchUserProfileInfo', profileObject: response.data })
          } catch(e){
            console.log(e.response)
          }
        }
        GetProfileInfo()
      },[])
      








      

      function FormSubmit(e) {
        e.preventDefault();
        console.log("form subited");
        dispatch({type: 'changeSendRequest'});
      }

      // Send Reqeust

      useEffect(()=>{
        if (state.sendRequest){
            async function UpdateProfile() {
                const formData = new FormData()

                    formData.append("agency_name", state.agencyNameValue);
                    formData.append("phone_number", state.phoneNumberValue );
                    formData.append("bio", state.bioValue );
                    formData.append("profile_picture", state.profilePictureValue );
                    formData.append("seller", GlobalState.userId );
                    
                
                try {

                    const response = await Axios.patch(`https://8000-tonnyg95-myhome-2864quj0ulx.ws-eu64.gitpod.io/api/profiles/${GlobalState.userId}/update/`, formData);
                    console.log(response);
                    navigate('/listings')
                } catch (e) {
                    console.log(e.response);
                }

            }

            UpdateProfile();
        }
      }, [state.sendRequest]);

      

      function WelcomeDisplay() {
		if (
			state.userProfile.agencyName === null ||
			state.userProfile.agencyName === "" ||
			state.userProfile.phoneNumber === null ||
			state.userProfile.phoneNumber === ""
		) {
			return (
                <>

                <Row className='text-center'>
                  <Col className="bg-dark text-light text-center py-5" xs={12} md={4} lg={4} xl={4}> 
            
                  <h5 className='text-center my-3'>Welcome {GlobalState.userUsername}</h5> 


                  <img className='rounded my-4 placeholed-image' src='https://res.cloudinary.com/dsq1kzjdy/image/upload/v1662651727/media/No-Image-Placeholder.svg_bgopvn.png' />
                
                    <h5 className='text-center m-4'>Information:</h5>
                    <h6 className='text-center m-4'>Please fill out required filed to update your profile</h6>

                    <Container>
                    <Row className='mt-5'>
                        
                        <Col xs={6} sm={6} md={6} lg={6} className='p-1'>
                        
                        <h6 className='text-center m-4'>Agency Name:</h6>
                        <h6 className='text-center m-4'>Phone Number:</h6>
                        <h6 className='text-center m-4'>Listings:</h6>
                        
                       
                        </Col>


                        <Col xs={6} sm={6} md={6} lg={6} className='p-1'>

                        <h6 className='text-center m-4'>Not Provided</h6>
                        <h6 className='text-center m-4'>Not Provided</h6>
                        <h6 className='text-center m-4'>You don't have Listings</h6>
                        

                        </Col>
                    </Row>

                    <Row>
                    <h6 className='text-center m-4'>About you:</h6>
                    </Row>

                    <Row>
                    <h6 className='text-center m-4'>No information</h6>
                    </Row>

                    </Container>
                  
                  </Col>
            
            
            
                  <Col className="bg-light py-5 text-center" xs={12} md={8} lg={8} xl={8}>
            
                  <Form onSubmit={FormSubmit} className="px-5 bg-light">
                  
                      <h1 className="m-5">Update your profile</h1>
            
                      <Row className='justify-content-center'>
                      
                      
            
            
                      <Col xs={9} sm={9} md={9} lg={9}> 
            
                      <Form.Group className="mb-5 mt-5" controlId="formBasicEmail">
                      <Form.Label>Agency Name*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your agency name"
                          value={state.agencyName}
                          onChange={(e) => dispatch({type: 'catchAgencyNameChange', agencyNameChosen: e.target.value})}
                        />
                      </Form.Group>
                      
            
                      <Form.Group className="mb-3" controlId="formBasicEmail"> 
                      <Form.Label >Phone Number*</Form.Label>
                        <Form.Control
                          
                          type="text"
                          placeholder="Enter your phone number"
                          value={state.phoneNumberValue}
                          onChange={(e) => dispatch({type: 'catchPhoneNumberChange', phoneNumberChosen: e.target.value})}
                        />
                      </Form.Group>
            
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Bio</Form.Label>
                            <Form.Control as="textarea" rows={3} 
                            placeholder="Tell us something about your agency"
                            value={state.bioValue}
                            onChange={(e) =>
                              dispatch({
                                type: "catchBioChange",
                                bioChosen: e.target.value,
                              })
                            }/>
                             </Form.Group>
            
                      <Form.Group controlId="formFileMultiple" className="mt-3">
                        <Form.Label>Upload Profile Picture</Form.Label>
                        <Form.Control 
                        type="file"  
                        accept='image/png, image/jpeg' 
                        onChange={(e)=> dispatch({type: 'catchUploadedPicture', PictureChosen: e.target.files})}/>
                        </Form.Group>
            
                        <ul className='mt-4'>
                            
                        {state.ProfilePictureValue ? <li>{state.profilePictureChosen.name}</li> : ''}
                        
                        </ul>
            
                      
                      </Col>
                      
            
                      </Row>
            
                      <Button className="m-3" variant="success" type="submit">
                        Save <i class="fa-solid fa-floppy-disk"></i>
                      </Button>
                      
                    </Form>
                  </Col>
                </Row>
                
                
                </>
			);
		} else {
			return (
                <>

                <Row className='text-center'>
                  <Col className="bg-dark text-light text-center py-5" xs={12} md={4} lg={4} xl={4}> 
            
                  <h5 className='text-center my-3'>Welcome Back {GlobalState.userUsername}</h5> 


                  <img className='rounded my-4 placeholed-image' src={ state.userProfile.profilePic ? state.userProfile.profilePic : 'https://res.cloudinary.com/dsq1kzjdy/image/upload/v1662651727/media/No-Image-Placeholder.svg_bgopvn.png' } />
                
                    <h5 className='text-center m-4' >Information:</h5>

                    <Container>
                    <Row className='mt-5'>
                        
                        <Col xs={6} sm={6} md={6} lg={6} className='p-1'>
                        
                        <h6 className='text-center m-4'>Agency Name:</h6>
                        <h6 className='text-center m-4'>Phone Number:</h6>
                        <h6 className='text-center m-4'>Listings:</h6>
                        
                       
                        </Col>


                        <Col xs={6} sm={6} md={6} lg={6} className='p-1'>

                        <h6 className='text-center m-4'>{state.userProfile.agencyName}</h6>
                        <h6 className='text-center m-4'>{state.userProfile.phoneNumber}</h6>
                        <h6 onClick={() =>navigate(`/agencies/${state.userProfile.sellerId}`)} className='text-center m-4'>{state.userProfile.sellerListings.length}</h6> 
                        
                        

                        </Col>
                    </Row>

                    <Row>
                    <h6 className='text-center my-4'>About Agency:</h6>
                    </Row>

                    <Row>
                    <h6 className='text-center'>{state.userProfile.bio}</h6>
                    </Row>

                    </Container>
                  
                  </Col>
            
            
            
                  <Col className="bg-light py-5 text-center" xs={12} md={8} lg={8} xl={8}>
            
                  <Form onSubmit={FormSubmit} className="px-5 bg-light">
                  
                      <h1 className="m-5">Update your profile</h1>
            
                      <Row className='justify-content-center'>
                      
                      
            
            
                      <Col xs={9} sm={9} md={9} lg={9}> 
            
                      <Form.Group className="mb-5 mt-5" controlId="formBasicEmail">
                      <Form.Label>Agency Name*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your agency name"
                          value={state.agencyName}
                          onChange={(e) => dispatch({type: 'catchAgencyNameChange', agencyNameChosen: e.target.value})}
                        />
                      </Form.Group>
                      
            
                      <Form.Group className="mb-3" controlId="formBasicEmail"> 
                      <Form.Label >Phone Number*</Form.Label>
                        <Form.Control
                          
                          type="text"
                          placeholder="Enter your phone number"
                          value={state.phoneNumberValue}
                          onChange={(e) => dispatch({type: 'catchPhoneNumberChange', phoneNumberChosen: e.target.value})}
                        />
                      </Form.Group>
            
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Bio</Form.Label>
                            <Form.Control as="textarea" rows={3} 
                            placeholder="Tell us something about your agency"
                            value={state.bioValue}
                            onChange={(e) =>
                              dispatch({
                                type: "catchBioChange",
                                bioChosen: e.target.value,
                              })
                            }/>
                             </Form.Group>
            
                      <Form.Group controlId="formFileMultiple" className="mt-3">
                        <Form.Label>Upload Profile Picture</Form.Label>
                        <Form.Control 
                        type="file"  
                        accept='image/png, image/jpeg' 
                        onChange={(e)=> dispatch({type: 'catchUploadedPicture', PictureChosen: e.target.files})}/>
                        </Form.Group>
            
                        <ul className='mt-4'>
                            
                        {state.ProfilePictureValue ? <li>{state.profilePictureChosen.name}</li> : ''}
                        
                        </ul>
            
                      
                      </Col>
                      
            
                      </Row>
            
                      <Button className="m-3" variant="success" type="submit">
                        Save <i class="fa-solid fa-floppy-disk"></i>
                      </Button>

                      
                      
                    </Form>
                  </Col>
                </Row>
                
                
                </>
			);
		}
	}

      
  return (
    WelcomeDisplay()
  )
}

export default Profile