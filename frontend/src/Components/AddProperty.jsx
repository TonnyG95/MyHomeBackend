/* eslint-disable default-case */
import React, {useEffect, useState, useContext} from 'react'
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useImmerReducer } from "use-immer";
import Axios from 'axios';

// Contexts
 import DispatchContext from "../Contexts/DispatchContext";
 import StateContext from "../Contexts/StateContext";

function AddProperty() {
    const GlobalDispatch = useContext(DispatchContext)
    const GlobalState = useContext(StateContext)


    const initialState = {
        titleValue: "",
        listingTypeValue: "",
        descriptionValue: "",
        areaValue: "",
        townValue: "",
        latitudeValue: "",
        longitudeValue: "",
        propertyStatusValue: "",
        priceValue: "",
        rentalFrequencyValue: "",
        roomsValue: "",
        furnishedValue: false,
        poolValue: false,
        elevatorValue: false,
        cctvValue: false,
        parkingValue: false,
        picture1Value: "",
        picture2Value: "",
        picture3Value: "",
        picture4Value: "",
        picture5Value: "",
        uploadedPictures: [],

      };
    
      function ReducerFuction(draft, action) {
        switch (action.type) {
            case "catchTitleChange":
                draft.titleValue = action.titleChosen;
                break;

            case "catchListingTypeChange":
                draft.listingTypeValue = action.listingTypeChosen;
                break;

            case "catchDescriptionChange":
                draft.descriptionValue = action.descriptionChosen;
                break;

            case "catchAreaChange":
                draft.areaValue = action.areaChosen;
                break;

            case "catchTownChange":
                draft.townValue = action.townChosen;
                break;

            case "catchLatitudeChange":
                draft.latitudeValue = action.latitudeChosen;
                break;

            case "catchLongitudeChange":
                draft.longitudeValue = action.longitudeChosen;
                break;

            case "catchPropertyStatusChange":
                draft.propertyStatusValue = action.propertyStatusChosen;
                break;

            case "catchPriceChange":
                draft.priceValue = action.priceChosen;
                break;

            case "catchRentalFrequencyChange":
                draft.rentalFrequencyValue = action.rentalFrequencyChosen;
                break;

            case "catchRoomChange":
                draft.roomsValue = action.roomsChosen;
                break;

            case "catchFurnishedChange":
                draft.furnishedValue = action.furnishedChosen;
                break;

            case "catchPoolChange":
                draft.poolValue = action.poolChosen;
                break;

            case "catchElevatorChange":
                draft.elevatorValue = action.elevatorChosen;
                break;

            case "catchCctvChange":
                draft.cctvValue = action.cctvChosen;
                break;

            case "catchParkingChange":
                draft.parkingValue = action.parkingChosen;
                break;

            case "catchPicture1Change":
                draft.picture1Value = action.picture1Chosen;
                break;

            case "catchPicture2Change":
                draft.picture2Value = action.picture2Chosen;
                break;

            case "catchPicture3Change":
                draft.picture3Value = action.picture3Chosen;
                break;

            case "catchPicture4Change":
                draft.picture4Value = action.picture4Chosen;
                break;

            case "catchPicture5Change":
                draft.picture5Value = action.picture5Chosen;
                break;

            case "catchUploadedPictures":
                draft.uploadedPictures = action.picturesChosen;
                break;
            
            case 'changeSendRequest':
                draft.sendRequest = draft.sendRequest + 1;
                break    
        
    
        }
      }


      const [state, dispatch] = useImmerReducer(ReducerFuction, initialState);

      // Picture Upload

      // Picture 1
      useEffect(()=>{
        if (state.uploadedPictures[0]){
            dispatch({type: 'catchPicture1Change', picture1Chosen: state.uploadedPictures[0],})
        }
      },[state.uploadedPictures[0]])


      // Picture 2

      useEffect(()=>{
        if (state.uploadedPictures[1]){
            dispatch({type: 'catchPicture2Change', picture2Chosen: state.uploadedPictures[1],})
        }
      },[state.uploadedPictures[1]])


       // Picture 3

       useEffect(()=>{
        if (state.uploadedPictures[2]){
            dispatch({type: 'catchPicture3Change', picture3Chosen: state.uploadedPictures[2],})
        }
      },[state.uploadedPictures[2]])

       // Picture 4

       useEffect(()=>{
        if (state.uploadedPictures[3]){
            dispatch({type: 'catchPicture4Change', picture4Chosen: state.uploadedPictures[3],})
        }
      },[state.uploadedPictures[3]])

       // Picture 5

       useEffect(()=>{
        if (state.uploadedPictures[4]){
            dispatch({type: 'catchPicture5Change', picture5Chosen: state.uploadedPictures[4],})
        }
      },[state.uploadedPictures[4]])


    // Picture Upload END


    function FormSubmit(e) {
        e.preventDefault();
        console.log("form subited");
        dispatch({type: 'changeSendRequest'});
      }


      useEffect(()=>{
        if (state.sendRequest){
            async function AddProperty() {
                const formData = new FormData()

                    formData.append('title', state.titleValue);
                    formData.append('description', state.descriptionValue );
                    formData.append('area', state.areaValue );
                    formData.append('town', state.townValue );
                    formData.append('listing_type ', state.listingTypeValue );
                    formData.append('property_status ', state.propertyStatusValue );
                    formData.append('price ', state.priceValue );
                    formData.append('rental_frequency ', state.rentalFrequencyValue );
                    formData.append('rooms ', state.roomsValue );
                    formData.append('furnished ', state.furnishedValue );
                    formData.append('pool ', state.poolValue );
                    formData.append('elevator ', state.elevatorValue );
                    formData.append('cctv ', state.cctvValue );
                    formData.append('parking ', state.parkingValue );
                    formData.append('latitude ', state.latitudeValue );
                    formData.append('longitude ', state.longitudeValue );
                    formData.append('picture1 ', state.picture1Value );
                    formData.append('picture2 ', state.picture2Value );
                    formData.append('picture3 ', state.picture3Value );
                    formData.append('picture4 ', state.picture4Value );
                    formData.append('picture5 ', state.picture5Value );
                    formData.append('seller ', GlobalState.userId );
                
                try {

                    const response = await Axios.post("https://8000-tonnyg95-myhome-2864quj0ulx.ws-eu63.gitpod.io/api/listings/create/", formData)
                    console.log(response)

                } catch (e) {
                    console.log(e.response)
                }

            }
            AddProperty()
        }
      },[state.sendRequest])


  return (
    <Row className="login-form justify-content-center align-items-center">
      <Col className="my-4" xs={12} md={9} lg={9} xl={9}>
        <Form onSubmit={FormSubmit} className="px-5 box bg-light">
          <Row className="login-form justify-content-center align-items-center">
            <h1 className="m-4 text-center">Add Property</h1>
          </Row>

          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  value={state.titleValue}
                  onChange={(e) =>
                    dispatch({
                      type: "catchTitleChange",
                      titleChosen: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} 
                placeholder="Add description"
                value={state.descriptionValue}
                onChange={(e) =>
                  dispatch({
                    type: "catchDescriptionChange",
                    descriptionChosen: e.target.value,
                  })
                }/>
                 </Form.Group>


                <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Town</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Town"
                  value={state.townValue}
                  onChange={(e) =>
                    dispatch({
                      type: "catchTownChange",
                      townChosen: e.target.value,
                    })
                  }
                />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Latitude"
                  value={state.latitudeValue}
                  onChange={(e) =>
                    dispatch({
                      type: "catchLatitudeChange",
                      latitudeChosen: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Longitude</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Longitude"
                  value={state.longitudeValue}
                  onChange={(e) =>
                    dispatch({
                      type: "catchLongitudeChange",
                      longitudeChosen: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <p className="m-3">Information  on How to get Latitude and Longitude can be found here</p>

              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Price in €"
                  value={state.priceValue}
                  onChange={(e) =>
                    dispatch({
                      type: "catchPriceChange",
                      priceChosen: e.target.value,
                    })
                  }
                />
              </Form.Group>




              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Rooms</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter number of rooms"
                  value={state.roomsValue}
                  onChange={(e) =>
                    dispatch({
                      type: "catchRoomChange",
                      roomsChosen: e.target.value,
                    })
                  }
                />
              </Form.Group>


            </Col>

            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            
            <Form.Label>Listing Type</Form.Label>
            <Form.Select className="mb-3" size="md"
            value={state.listingTypeValue}
            onChange={(e) =>
              dispatch({
                type: "catchListingTypeChange",
                listingTypeChosen: e.target.value,
              })
            }>
            <option>Select</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Office</option>
            </Form.Select>



            <Form.Label >Area</Form.Label>
            <Form.Select className="mb-3" size="md"
            value={state.areaValue}
            onChange={(e) =>
              dispatch({
                type: "catchAreaChange",
                areaChosen: e.target.value,
              })
            }>
            <option>Select</option>
            <option>Dublin</option>
            <option>Outside Dublin</option>
            
            </Form.Select>

            <Form.Label >Property Status</Form.Label>
            <Form.Select className="mb-3" size="md"
            value={state.propertyStatusValue}
            onChange={(e) =>
            dispatch({
                type: "catchPropertyStatusChange",
                propertyStatusChosen: e.target.value,
            })
            }>
            <option>Select</option>
            <option>Sale</option>
            <option>Rent</option>

            </Form.Select>

            <Form.Label >Rental Frequency </Form.Label>
            <Form.Select className="mb-3" size="md"
            value={state.rentalFrequencyValue}
            onChange={(e) =>
            dispatch({
                type: "catchRentalFrequencyChange",
                rentalFrequencyChosen: e.target.value,
            })
            }>
            <option>Select</option>
            <option>Month</option>
            <option>Week</option>
            <option>Day</option>

            </Form.Select>

            
            <Form.Label>Features:</Form.Label>
            
            <Row xs={12} sm={12} md={12} className="d-flex p-2">
               
                <Form.Check 
                type="switch"
                id="custom-switch"
                label="Furnished"
                // control={<Check checked={state.furnishedValue} onChange}

                value={state.furnishedValue}
                onChange={(e) => dispatch({type: 'catchFurnishedChange', furnishedChosen: e.target.checked})}
                />

                <Form.Check 
                type="switch"
                id="custom-switch"
                label="Pool"
                // control={<Check checked={state.furnishedValue} onChange}

                value={state.poolValue}
                onChange={(e) => dispatch({type: 'catchPoolChange', poolChosen: e.target.checked})}
                />



                <Form.Check 
                type="switch"
                id="custom-switch"
                label="Elevator"
                // control={<Check checked={state.furnishedValue} onChange}

                value={state.elevatorValue}
                onChange={(e) => dispatch({type: 'catchElevatorChange', elevatorChosen: e.target.checked})}
                />


                <Form.Check 
                type="switch"
                id="custom-switch"
                label="CCTV"
                // control={<Check checked={state.furnishedValue} onChange}

                value={state.cctvValue}
                onChange={(e) => dispatch({type: 'catchCctvChange', cctvChosen: e.target.checked})}
                />


                <Form.Check 
                type="switch"
                id="custom-switch"
                label="Parking"
                // control={<Check checked={state.furnishedValue} onChange}

                value={state.parkingValue}
                onChange={(e) => dispatch({type: 'catchParkingChange', parkingChosen: e.target.checked})}
                />
                
        
            </Row>
           
            <Form.Group controlId="formFileMultiple" className="mt-3">
            <Form.Label>Upload images (Max 5 Images)</Form.Label>
            <Form.Control 
            type="file" 
            multiple 
            accept='image/png, image/jpeg' 
            onChange={(e)=> dispatch({type: 'catchUploadedPictures', picturesChosen: e.target.files})}/>
            </Form.Group>

            <div>
                
                <ul className='mt-4'>
                
                {state.picture1Value ? <li>{state.picture1Value.name}</li> : ''}
                {state.picture2Value ? <li>{state.picture2Value.name}</li> : ''}
                {state.picture3Value ? <li>{state.picture3Value.name}</li> : ''}
                {state.picture4Value ? <li>{state.picture4Value.name}</li> : ''}
                {state.picture5Value ? <li>{state.picture5Value.name}</li> : ''}
                </ul>
                
            </div>

        

            



            </Col>

            <Row
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              className="justify-content-center align-items-center"
            >
              <Button className="mx-1 mt-4" variant="success" type="submit">
            Submit
          </Button>
            </Row>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default AddProperty