import GroomerSnapShot from '../../components/groomer/GroomerSnapShot'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import GroomersClient from '../../api/GroomersClient';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import "./Feed.css"
import React from 'react';


const Feed = () => {
  const [groomers, setGroomers] = useState([]);
  const groomersClient = new GroomersClient();

  useEffect(() => {
    groomersClient.fetchAllGroomers(setGroomers);
  }, []);

  return(
    <>
      <h2 className="title">Featured Groomers</h2>
      <Container>
        <Row>
          {groomers.map((groomer) => (
            <div className='groomers-link'>
              <Link to={`groomers/${groomer.id}`} className='link'>
                <GroomerSnapShot key={groomer.id} groomer={groomer}/>
              </Link>
            </div>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Feed;