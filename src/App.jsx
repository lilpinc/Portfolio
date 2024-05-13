
// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Header/Navigation.jsx';
import './App.css'
import { useState } from 'react';
import Footer from './components/Footer/Footer.jsx';




function App() {

const [isCrazy, setIsCrazy] = useState(false);
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className='body' data-theme={isCrazy ? "crazy": "light"}>
      <Navigation isChecked={isCrazy} handleChange={() => setIsCrazy(!isCrazy)}/>
      <main>
        <Outlet />
      </main>
      <Footer />
      </div>
  );
}

export default App;
