/* eslint-disable default-case */
import React, {useEffect, useState, useContext} from 'react'
import { Row, Col, Button, Form, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useImmerReducer } from "use-immer";
import Axios from 'axios';

// Contexts
 import StateContext from "../Contexts/StateContext";



 function ListingUpdate(props) {
	const navigate = useNavigate();
	const GlobalState = useContext(StateContext);

	const initialState = {
		titleValue: props.listingData.title,
		listingTypeValue: props.listingData.listing_type,
		descriptionValue: props.listingData.description,
		propertyStatusValue: props.listingData.property_status,
		priceValue: props.listingData.price,
		rentalFrequencyValue: props.listingData.rental_frequency,
		furnishedValue: props.listingData.furnished,
		poolValue: props.listingData.pool,
		elevatorValue: props.listingData.elevator,
		cctvValue: props.listingData.cctv,
		parkingValue: props.listingData.parking,
		sendRequest: 0,
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

			case "catchPropertyStatusChange":
				draft.propertyStatusValue = action.propertyStatusChosen;
				break;

			case "catchPriceChange":
				draft.priceValue = action.priceChosen;
				break;

			case "catchRentalFrequencyChange":
				draft.rentalFrequencyValue = action.rentalFrequencyChosen;
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

			case "changeSendRequest":
				draft.sendRequest = draft.sendRequest + 1;
				break;
		}
	}

	const [state, dispatch] = useImmerReducer(ReducerFuction, initialState);

	function FormSubmit(e) {
		e.preventDefault();

		dispatch({ type: "changeSendRequest" });
		
	}

	useEffect(() => {
		if (state.sendRequest) {
			async function UpdateProperty() {
				const formData = new FormData();
				if (state.listingTypeValue === "Office") {
					formData.append("title", state.titleValue);
					formData.append("description", state.descriptionValue);
					formData.append("listing_type", state.listingTypeValue);
					formData.append("property_status", state.propertyStatusValue);
					formData.append("price", state.priceValue);
					formData.append("rental_frequency", state.rentalFrequencyValue);
					formData.append("furnished", state.furnishedValue);
					formData.append("pool", state.poolValue);
					formData.append("elevator", state.elevatorValue);
					formData.append("cctv", state.cctvValue);
					formData.append("parking", state.parkingValue);
					formData.append("seller", GlobalState.userId);
				} else {
					formData.append("title", state.titleValue);
					formData.append("description", state.descriptionValue);
					formData.append("listing_type", state.listingTypeValue);
					formData.append("property_status", state.propertyStatusValue);
					formData.append("price", state.priceValue);
					formData.append("rental_frequency", state.rentalFrequencyValue);
					formData.append("furnished", state.furnishedValue);
					formData.append("pool", state.poolValue);
					formData.append("elevator", state.elevatorValue);
					formData.append("cctv", state.cctvValue);
					formData.append("parking", state.parkingValue);
					formData.append("seller", GlobalState.userId);
				}

				try {
					const response = await Axios.patch(
						`https://8000-tonnyg95-myhome-2864quj0ulx.ws-eu64.gitpod.io/api/listings/${props.listingData.id}/update/`,
						formData
					);

					console.log(response.data)
                    navigate(0);
				} catch (e) {
					console.log(e.response)
				}
			}
			UpdateProperty();
		}
	}, [state.sendRequest]);
      
  
  return (
    <Row className="login-form justify-content-center align-items-center">
      <Col className="my-4">
        <Form onSubmit={FormSubmit} className="px-5">
          <Row className="login-form justify-content-center align-items-center">
            <h1 className="m-4 text-center">Update Property</h1>
          </Row>

          <Row>
            
              
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
            
            
            <Form.Label>Listing Type</Form.Label>
            <Form.Select className="mb-3" size="md"
            value={state.listingTypeValue}
            onChange={(e) =>
              dispatch({
                type: "catchListingTypeChange",
                listingTypeChosen: e.target.value,
              })
            }>
            <option></option>
            <option>House</option>
            <option>Apartment</option>
            <option>Office</option>
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
            <option></option>
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
            <option></option>
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

            

            <Row
              className="justify-content-center align-items-center"
            >
              <Button type="submit" className='btn btn-success mt-3'>Update <i class="bi bi-save"></i></Button>
              

           </Row>

          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default ListingUpdate;