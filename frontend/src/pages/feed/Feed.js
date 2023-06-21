import GroomerSnapShot from '../../components/groomer/GroomerSnapShot'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import GroomersClient from '../../api/GroomersClient';
import { useState, useEffect } from 'react';

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
            <GroomerSnapShot key={groomer.id} groomer={groomer} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Feed;