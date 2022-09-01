import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'


import myListings from './Assets/Data/Dummydata'

function Cards() {
  return (
    <Container>
      <h3 className='listings-text'>Listings</h3>
      {myListings.map((listing)=>{
          return (
            <Card className=" bg-dark2 text-light mb-2 py-3" key={listing.id} style={{ width: '100%', margin: 'auto',  color: '#212529' }}>
            <Card.Img variant="top" src={listing.picture1} alt={listing.title} />
            <Card.Body>
              <Card.Title>{listing.title}</Card.Title>
              <Card.Text>
                {listing.description.substring(0, 200)}...
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