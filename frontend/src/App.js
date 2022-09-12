import React, {useEffect}  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import { useImmerReducer } from "use-immer";


// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// React Leaflet
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";


// Components

import Home from './Components/Home';
import Login from './Components/Login';
import Listings from './Components/Listings';
import Navigation from './Components/Nav';
import Footer from './Components/Footer';
import Testing from './Components/Testing';
import Register from './Components/Register';
import AddProperty from './Components/AddProperty';
import Profile from './Components/Profile';
import ListingDetails from './Components/ListingDetails';
import AgencyDetails from './Components/AgencyDetails';



// Context

import DispatchContext from './Contexts/DispatchContext';
import StateContext from './Contexts/StateContext';
import Agencies from './Components/Agencies';

function App() {

	

  const initialState = {
		userUsername: localStorage.getItem("theUserUsername"),
		userEmail: localStorage.getItem("theUserEmail"),
		userId: localStorage.getItem("theUserId"),
		userToken: localStorage.getItem("theUserToken"),
		userIsLogged: localStorage.getItem("theUserUsername") ? true : false,
	};

	function ReducerFuction(draft, action) {
		// eslint-disable-next-line default-case
		switch (action.type) {
			case "catchToken":
				draft.userToken = action.tokenValue;
				break;
			case "userSignsIn":
				draft.userUsername = action.usernameInfo;
				draft.userEmail = action.emailInfo;
				draft.userId = action.IdInfo;
				draft.userIsLogged = true;
				break;

			case "logout":
				draft.userIsLogged = false;
				break;
		}
	}

  const [state, dispatch] = useImmerReducer(ReducerFuction, initialState);

  useEffect(()=>{
    if (state.userIsLogged) {
			localStorage.setItem("theUserUsername", state.userUsername);
			localStorage.setItem("theUserEmail", state.userEmail);
			localStorage.setItem("theUserId", state.userId);
			localStorage.setItem("theUserToken", state.userToken);
		} else {
			localStorage.removeItem("theUserUsername");
			localStorage.removeItem("theUserEmail");
			localStorage.removeItem("theUserId");
			localStorage.removeItem("theUserToken");
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
      <Route path='/add-property' element={ <AddProperty />} />
	  <Route path='/profile' element={ <Profile />} />
	  <Route path='/agencies' element={ <Agencies />} />
	  <Route path='/agencies/:id' element={ <AgencyDetails />} />
	  <Route path='/listings/:id' element={ <ListingDetails />} />
    </Routes>
	<ToastContainer />
    <Footer />
    </BrowserRouter>
    </DispatchContext.Provider>
    </StateContext.Provider>
    
  );
}

export default App;
