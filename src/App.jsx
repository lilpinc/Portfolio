
// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Header/Navigation.jsx';
import './App.css'
import Footer from './components/Footer/Footer.jsx';




function App() {

  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      </div>
  );
}

export default App;
