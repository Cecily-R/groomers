import "./GroomerSnapShot.css"
import Card from 'react-bootstrap/Card';
import holder from '../../assets/holder.jpeg'

const GroomerSnapShot = (props) => {
  return (
    <Card style={{ width: '25rem',
                   height: '26rem',
                }}>
      <Card.Img src={ holder }/>
      <Card.Title>{props.groomer.name}</Card.Title>
      <Card.Body>
        <Card.Text className="text-warning">{props.groomer.rating}</Card.Text>
        <Card.Text>{props.groomer.location}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GroomerSnapShot;