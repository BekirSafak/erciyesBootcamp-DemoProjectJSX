import React from 'react';

import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Suggestions from './components/Suggestions';
import Activities from './components/Activities';
import Homemain from './pages/Homemain';
import Footer from './components/Footer';
import Details from './pages/Details';
import { Route, Routes, Link, NavLink, Navigate, useNavigate, Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homemain></Homemain>}></Route>
        <Route path='/details' element={<Details></Details>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
