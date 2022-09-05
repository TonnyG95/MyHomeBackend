import React, {useEffect}  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import { useImmerReducer } from "use-immer";


// Components

import Home from './Components/Home';
import Login from './Components/Login';
import Listings from './Components/Listings';
import Navigation from './Components/Nav';
import Footer from './Components/Footer';
import Testing from './Components/Testing';
import Register from './Components/Register';

// Context

import DispatchContext from './Contexts/DispatchContext';
import StateContext from './Contexts/StateContext';

function App() {
  const initialState = {
    userUsername: localStorage.getItem('theUserUsername'),
    userEmailL: localStorage.getItem('theUserEmail'),
    userId: localStorage.getItem('theUserId'),
    userToken: localStorage.getItem('theUserToken'),
    userIsLogged: localStorage.getItem('theUserUsername') ? true : false,
  };

  function ReducerFuction(draft, action) {
    switch (action.type) {
      case 'catchToken':
        draft.userToken = action.tokenValue;
        break
      case 'userSignsIn':
        draft.userUsername = action.usernameInfo;
        draft.userEmail = action.emailInfo;
        draft.userId = action.IdInfo;
        draft.userIsLogged = true;
        break;
      case 'logout':
        draft.userIsLogged = false
        break

      
    }
  }

  const [state, dispatch] = useImmerReducer(ReducerFuction, initialState);

  useEffect(()=>{
    if (state.userIsLogged){
      localStorage.setItem('theUserUsername', state.userUsername);
      localStorage.setItem('theUserEmail', state.userEmail);
      localStorage.setItem('theUserId', state.userUserId);
      localStorage.setItem('theUserUsername', state.userToken);
    } else{
      localStorage.removeItem('theUserUsername');
      localStorage.removeItem('theUserEmail');
      localStorage.removeItem('theUserId');
      localStorage.removeItem('theUserToken');
    }
  },[state.userIsLogged])

  return (
    <StateContext.Provider value={state}>
    <DispatchContext.Provider value={dispatch}>
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
    </DispatchContext.Provider>
    </StateContext.Provider>
    
  );
}

export default App;
