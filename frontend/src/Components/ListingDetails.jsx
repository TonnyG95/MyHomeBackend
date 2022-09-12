import React, { useEffect, useState, useContext } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Container,
  Card,
  Spinner,
  Carousel,
} from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useImmerReducer } from "use-immer";
import Axios from "axios";

// Contexts
import StateContext from "../Contexts/StateContext";

function ListingDetails() {
  const navigate = useNavigate();
  const GlobalState = useContext(StateContext);

  const params = useParams();

  const initialState = {
    dataIsLoading: true,
    listingInfo: "",
  };

  function ReducerFuction(draft, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case "catchListingInfo":
        draft.listingInfo = action.listingObject;
        break;

      case "loadingDone":
        draft.dataIsLoading = false;
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(ReducerFuction, initialState);

  useEffect(() => {
    async function GetPListingInfo() {
      try {
        const response = await Axios.get(
          `https://8000-tonnyg95-myhome-2864quj0ulx.ws-eu64.gitpod.io/api/listings/${params.id}/`
        );

        dispatch({
          type: "catchListingInfo",
          listingObject: response.data,
        });
        dispatch({ type: "loadingDone" });
      } catch (e) {}
    }
    GetPListingInfo();
  }, []);

  const listingPictures = [
    state.listingInfo.picture1,
    state.listingInfo.picture2,
    state.listingInfo.picture3,
    state.listingInfo.picture4,
    state.listingInfo.picture5,
  ].filter((picture)=> picture !== null);

  const [currentPicture, setCurrentPicture] = useState(0);

  function NextPicture() {
		if (currentPicture === listingPictures.length - 1) {
			return setCurrentPicture(0);
		} else {
			return setCurrentPicture(currentPicture + 1);
		}
	}

	function PreviousPicture() {
		if (currentPicture === 0) {
			return setCurrentPicture(listingPictures.length - 1);
		} else {
			return setCurrentPicture(currentPicture - 1);
		}
	}

  if (state.dataIsLoading === true) {
      return (
        <div className="container text-center my-5 p-4">
          <Spinner animation="border" />
        </div>
      );
  }

  return (
    <>
      <Row className="text-center">
        <Col
          className="bg-dark text-light text-center py-5"
          xs={12}
          md={5}
          lg={5}
          xl={5}
        >
          <h5>Seller Details</h5>
        </Col>








        <Col className="bg-light py-5 text-center" xs={12} md={7} lg={7} xl={7}>
          <h1 className="my-4">Listings Details</h1>
        
        
        {listingPictures.map((picture, index)=>{
          return (
          <div  key={index}>

            {index === currentPicture ? <img className="img-fluid" src={picture} /> : ''}

          </div>
          )
        })}

        <div className="my-3">
          <span onClick={PreviousPicture}> <i class=" mx-2 w-25 h-25 fa-solid fa-circle-arrow-left"></i></span>
          <span onClick={NextPicture}> <i class=" mx-2 w-25 h-25 fa-solid fa-circle-arrow-right"></i></span>
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        </Col>
      </Row>
    </>
  );
}

export default ListingDetails;
