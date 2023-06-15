import "./LogInForm.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Container } from 'react-bootstrap'

const LogInForm = () => {

  return (
    <div className="form-container" style={{ display: 'block', 
                  width: 600, 
                  padding: 50, 
                  }}>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>    

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="outline-success" type="submit">
            Submit
          </Button>   
      </Form>
      </div>
  )
}

export default LogInForm;