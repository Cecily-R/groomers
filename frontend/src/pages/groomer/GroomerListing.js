import { React, useState, useEffect } from 'react';
import GroomersClient from '../../api/GroomersClient';

const GroomerListing = () => {
  const [groomer, setGroomer] = useState();
  const groomersClient = new GroomersClient();

  useEffect(() => {
    groomersClient.fetchSingleGroomer(setGroomer);
  })

  return (
    <>
      <h3>{groomer.name}</h3>
      <p>{groomer.location}</p>
      <p>{groomer.rating}</p>
      {groomer.services.map ((service) => (
          <p>{service}</p>
      ))}  
    </>
  )
}

export default GroomerListing;