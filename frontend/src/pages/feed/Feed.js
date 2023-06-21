import GroomerSnapShot from '../../components/groomer/GroomerSnapShot'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import "./Feed.css"

const Feed = () => {

  return(
    <>
      <h2 className="title">Featured Groomers </h2>
      <Container>
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