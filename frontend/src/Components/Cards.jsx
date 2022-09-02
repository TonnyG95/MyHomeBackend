import React, {useEffect, useState} from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import Axios from 'axios'


import myListings from './Assets/Data/Dummydata'

function Cards() {

  const [allListings, setAllListings] = useState([]);

  useEffect(() => {
    async function GetAllListings() {
      const responese = await Axios.get('https://8000-tonnyg95-myhome-2864quj0ulx.ws-eu63.gitpod.io/api/listings/')
      //console.log(responese.data);
      setAllListings(responese.data)
    }
    GetAllListings()
  },[])
  
 


  return (
    <Container>
      <h3 className='listings-text'>Listings</h3>
      {allListings.map((listing)=>{
          return (
            <Card className=" bg-dark2 text-light mb-2 py-3" key={listing.id} style={{ width: '100%', margin: 'auto',  color: '#212529' }}>
            <Card.Img variant="top" src={listing.picture1} alt={listing.title} />
            <Card.Body>
              <Card.Title>{listing.title}</Card.Title>
              <Card.Text>
                {listing.description}
              </Card.Text>

              {listing.property_status === "Sale" ? (<Card.Text className='text-center'> 
              <h5>Price: {listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} €</h5> 
              </Card.Text>) : (<Card.Text className='text-center'> 
              <h5>Price: {listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} € / {listing.rental_frequency}</h5> 
              </Card.Text>)}

              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card> 
          )
        })}
      
    </Container>
  )
}

export default Cards