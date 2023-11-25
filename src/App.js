import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Suggestions from './components/Suggestions';
import Activities from './components/Activities';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Suggestions></Suggestions>
      <Activities></Activities>
      <Footer></Footer>
    </div>
  );
}

export default App;
