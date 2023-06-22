import { React, useState, useEffect } from 'react';
import GroomersClient from '../../api/GroomersClient';
import { useParams } from 'react-router-dom';

const GroomerListing = () => {
  const { id } = useParams();
  const [groomer, setGroomer] = useState({
    name: '',
    location: '',
    rating: '',
    services: []
  });
  const groomersClient = new GroomersClient();

  useEffect(() => {
    groomersClient.fetchSingleGroomer(id, setGroomer);
  }, []);

  return (
    <>
      <h3>{groomer.name}</h3>
      <p>{groomer.location}</p>
      <p>{groomer.rating}</p>
      <p>{groomer.services}</p>
    </>
  )
}

export default GroomerListing;