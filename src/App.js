import React from 'react';

import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Suggestions from './components/Suggestions';
import Activities from './components/Activities';
import Homemain from './pages/Homemain';
import Footer from './components/Footer';
import Details from './pages/Details';
import Campain from './pages/Campain';
import Orders from './pages/Orders';
import Favorites from './pages/Favorites';
import Tickets from './pages/Tickets';
import Questions from './pages/Questions';
import ActivitiesDetails from './pages/ActivitiesDetails';
import { Route, Routes, Link, NavLink, Navigate, useNavigate, Router } from 'react-router-dom';
import Weather from './pages/Weather';
import { ActivitiesProvider } from './context/activitiesContext';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ActivitiesProvider>
        <Routes>
          <Route path='/' element={<Homemain></Homemain>}></Route>
          <Route path='/details' element={<Details></Details>}></Route>
          <Route path='/campains' element={<Campain></Campain>}></Route>
          <Route path='/orders' element={<Orders></Orders>}></Route>
          <Route path='/favorites' element={<Favorites></Favorites>}></Route>
          <Route path='/tickets' element={<Tickets></Tickets>}></Route>
          <Route path='/questions' element={<Questions></Questions>}></Route>
          <Route path='/weather' element={<Weather></Weather>}></Route>
          <Route path='/activitiesdetails/:id' element={<ActivitiesDetails></ActivitiesDetails>}></Route>
        </Routes>
      </ActivitiesProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
