import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Suggestions from './components/Suggestions';
import Activities from './components/Activities';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Suggestions></Suggestions>
      <Activities></Activities>
    </div>
  );
}

export default App;
