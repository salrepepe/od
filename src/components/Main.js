import React from 'react';
import Home from './Home';
import AboutUs from './AboutUs';
import CostDesc from './CostDesc';
import Works from './Works';
import Feedbacks from './Feedbacks';

const Main = () => {
  return (
    <main className="main">
      <Home />
      <AboutUs />
      <CostDesc />
      <Works />
      <Feedbacks />
    </main>
  );
};

export default Main;