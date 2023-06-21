import "./GroomerSnapShot.css"
import Card from 'react-bootstrap/Card';
import holder from '../../assets/holder.jpeg'

const GroomerSnapShot = () => {
  return (
    <Card style={{ width: '25rem',
                   height: '25rem',
                }}>
      <Card.Img src={ holder }/>
      <Card.Title>Groomer Name</Card.Title>
      <Card.Body>
        <Card.Text>Groomer Rating</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GroomerSnapShot;