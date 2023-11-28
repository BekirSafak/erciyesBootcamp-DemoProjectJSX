import React from 'react';

import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Suggestions from './components/Suggestions';
import Activities from './components/Activities';
import Homemain from './pages/Homemain';
import Footer from './components/Footer';
import Details from './pages/Details';
import Campain from './pages/Campain';
import ActivitiesDetails from './pages/ActivitiesDetails';
import { Route, Routes, Link, NavLink, Navigate, useNavigate, Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homemain></Homemain>}></Route>
        <Route path='/details' element={<Details></Details>}></Route>
        <Route path='/campains' element={<Campain></Campain>}></Route>
        <Route path='/activitiesdetails/:id' element={<ActivitiesDetails></ActivitiesDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
