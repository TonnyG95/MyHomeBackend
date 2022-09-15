import React, { useEffect, useState, useContext } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Container,
  Card,
  Spinner,
} from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useImmerReducer } from "use-immer";
import Axios from "axios";

// Contexts
import StateContext from "../Contexts/StateContext";

function AgencyDetails() {
  const navigate = useNavigate();
  const GlobalState = useContext(StateContext);

  const params = useParams();

  const initialState = {
    userProfile: {
      agencyName: "",
      phoneNumber: "",
      profilePic: "",
      bio: "",
      sellerListings: [],
    },
    dataIsLoading: true,
  };

  function ReducerFuction(draft, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case "catchUserProfileInfo":
        draft.userProfile.agencyName = action.profileObject.agency_name;
        draft.userProfile.phoneNumber = action.profileObject.phone_number;
        draft.userProfile.profilePic = action.profileObject.profile_picture;
        draft.userProfile.bio = action.profileObject.bio;
        draft.userProfile.sellerListings = action.profileObject.seller_listings;
        break;

      case "loadingDone":
        draft.dataIsLoading = false;
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(ReducerFuction, initialState);

  useEffect(() => {
    async function GetProfileInfo() {
      try {
        const response = await Axios.get(
          `/api/profiles/${params.id}/`
        );

        dispatch({
          type: "catchUserProfileInfo",
          profileObject: response.data,
        });
        dispatch({ type: "loadingDone" });
      } catch (e) {}
    }
    GetProfileInfo();
  }, []);

  if (state.dataIsLoading === true) {
    return (
      <div className="container text-center my-5 p-4">
        {" "}
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Row className="text-center">
      <Col
        className="bg-dark text-light text-center py-5"
        xs={12}
        md={4}
        lg={4}
        xl={4}
      >
        <Row className="text-center">
          <Container>
            <h5 className="text-center">{state.userProfile.agencyName}</h5>

            <img
              className="rounded my-4 placeholed-image"
              src={
                state.userProfile.profilePic
                  ? state.userProfile.profilePic
                  : "https://res.cloudinary.com/dsq1kzjdy/image/upload/v1662651727/media/No-Image-Placeholder.svg_bgopvn.png"
              }
              alt="test"
            />

            <h5 className="text-center my-4">Information:</h5>

            <Row className="mt-5">
              <Col xs={6} sm={6} md={6} lg={6} className="p-1">
                <h6 className="text-center my-4">Agency Name:</h6>
                <h6 className="text-center my-4">Phone Number:</h6>
                <h6 className="text-center my-4">Listings:</h6>
              </Col>

              <Col xs={6} sm={6} md={6} lg={6} className="p-1">
                <h6 className="text-center my-4">
                  {state.userProfile.agencyName}
                </h6>
                <h6 className="text-center my-4">
                  {state.userProfile.phoneNumber}
                </h6>
                <h6 className="text-center my-4">{state.userProfile.sellerListings.length}</h6>
              </Col>
            </Row>

            <Row>
              <h6 className="text-center my-4">About Agency:</h6>
            </Row>

            <Row>
              <h6 className="text-center my-4">{state.userProfile.bio}</h6>
            </Row>
          </Container>
        </Row>
      </Col>

      <Col className="py-5 text-center" xs={12} md={8} lg={8} xl={8}>
        <h1>Listings</h1>

        <div className="listings-scroll">
          {state.userProfile.sellerListings.map((listing) => {
            return (
              <Card
                key={listing.id}
                className="my-3 listing-box"
                style={{ display: "flex" }}
              >
                <Card.Img
                  className="p-3 listing-img"
                  variant="top"
                  src={
                    listing.picture1
                      ? listing.picture1
                      : "https://res.cloudinary.com/dsq1kzjdy/image/upload/v1662651727/media/No-Image-Placeholder.svg_bgopvn.png"
                  }
                />
                <Card.Body>
                  <Card.Title>{listing.title}</Card.Title>
                  <Card.Text>
                    {listing.description.substring(0, 100)}...
                  </Card.Text>

                  <Card.Text>
                    Price:
                    {listing.property_status === "Sale"
                      ? ` €${listing.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
                      : `€${listing.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/${
                          listing.rental_frequency
                        }`}
                  </Card.Text>

                  <Button
                    onClick={() => navigate(`/listings/${listing.id}`)}
                    variant="primary"
                  >
                    Details
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Col>
    </Row>
  );
}

export default AgencyDetails;
