import Home from './pages/home/Home';
import LogInForm from './components/login/LogInForm'
import SignUpForm from './components/signup/SignUpForm'
import GroomerListing from './pages/groomer/GroomerListing'

import { Routes,
         Route } from 'react-router-dom';

function RouteNames(props) {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LogInForm />}/>
      <Route path='/signup' element={<SignUpForm />}/>
      <Route path='/groomers/{props.groomer.id}' element={<GroomerListing />}/>
    </Routes>
  )
};

export default RouteNames;
