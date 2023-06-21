import Home from './pages/home/Home';
import LogInForm from './components/login/LogInForm'
import SignUpForm from './components/signup/SignUpForm'
import { Routes,
         Route } from 'react-router-dom';

function RouteNames () {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<LogInForm />}/>
      <Route path='/signup' element={<SignUpForm />}/>
    </Routes>
  )
};

export default RouteNames;
