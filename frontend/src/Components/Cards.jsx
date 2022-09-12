import React, {useEffect, useState} from 'react'
import { Container, Card, Button, Spinner } from 'react-bootstrap'
import Axios from 'axios'
import { Link, useNavigate } from "react-router-dom";




function Cards() {



  const [allListings, setAllListings] = useState([]);
  const [dataIsLoading, setDataIsLoading] = useState(true)
  const navigate = useNavigate()
  

  useEffect(() => {
    const source = Axios.CancelToken.source();
    async function GetAllListings() {
      try {
        const response = await Axios.get('https://8000-tonnyg95-myhome-2864quj0ulx.ws-eu64.gitpod.io/api/listings/', {cancelToken: source.token})
        setAllListings(response.data)
        setDataIsLoading(false) 
      } catch(error){
        console.log(error.response)
      }
    }
    GetAllListings();
    return ()=>{
      source.cancel();
    }
  },[])
 
  if (dataIsLoading === false ){
    console.log(allListings)
  }

  if (dataIsLoading === true ){
    return  <div className="container text-center my-5 p-4"> <Spinner animation="border" /></div>;
  }

  return (
    <Container>
      <h3 className='listings-text'>Listings</h3>
      {allListings.map((listing)=>{
          return (
            <Card
              className=" bg-dark2 text-light mb-2 py-3"
              key={listing.id}
              style={{ width: "100%", margin: "auto", color: "#212529" }}
            >
             <Card.Img
                variant="top"
                src={listing.picture1}
                alt={listing.title}
                className='rounded'
              />
              
              <Card.Body>
                <Card.Title>{listing.title}</Card.Title>
                <Card.Text>
                  {listing.description.substring(0, 150)}...
                </Card.Text>

                {listing.property_status === "Sale" ? (
                  <Card.Text className="text-center">
                    <h5>
                      Price:{" "}
                      {listing.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      €
                    </h5>
                  </Card.Text>
                ) : (
                  <Card.Text className="text-center">
                    <h5>
                      Price:{" "}
                      {listing.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      € / {listing.rental_frequency}
                    </h5>
                  </Card.Text>
                )}

                <Button onClick={() => navigate(`/listings/${listing.id}`)} variant="primary">Details</Button>

               
              </Card.Body>
            </Card>
          );
        })}
      
    </Container>
  )
}

export default Cards