import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

// Components

import Home from './Components/Home';
import Login from './Components/Login';
import Listings from './Components/Listings';
import Navigation from './Components/Nav';
import Footer from './Components/Footer';
import Testing from './Components/Testing';
import Register from './Components/Register';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/login' element={ <Login />} />
      <Route path='/listings' element={ <Listings />} />
      <Route path='/register' element={ <Register />} />
      <Route path='/testing' element={ <Testing />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    
  );
}

export default App;
