import Navigation from './components/navbar/Navbar';
import RouteNames from './Routes';
import { useState } from 'react';

function App () {
  const groomers = useState();

  return (
    <div id='body'>
        <Navigation /> 
        <RouteNames 
          groomers={groomers}
        />
    </div> 
  );
}

export default App;
