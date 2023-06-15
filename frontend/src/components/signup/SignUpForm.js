import './SignUpForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'

const SignUpForm = () => {

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

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Name" />
          </Form.Group>

          <Form.Group className="text-center" controlId="formBasicCheckbox">
            <Form.Check inline
              type="checkbox"
              label="Groomer"
            />
            <Form.Check inline
              type="checkbox"
              label="Owner"
            />
          </Form.Group>
          
          <div className="text-center" style={{ padding: 20 }}>
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </div> 
        </Form>
{/* 
        <Form.Text>
            Alreay have an account? Log in  
            <Link to='/login'>here!</Link>
          </Form.Text> */}
      </div>
  )
}

export default SignUpForm;