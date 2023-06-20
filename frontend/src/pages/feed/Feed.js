import GroomerSnapShot from '../../components/groomer/GroomerSnapShot'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import "./Feed.css"

const Feed = () => {

  return(
    <>
      <h2>Services near you</h2>
      <Container>
        <Row>
          <GroomerSnapShot />
          <GroomerSnapShot />
          <GroomerSnapShot />
        </Row>
        <Row>
          <GroomerSnapShot />
          <GroomerSnapShot />
          <GroomerSnapShot />
        </Row>
      </Container>
    </>
  )
}

export default Feed;