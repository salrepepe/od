import React from 'react';
import Home from './Home';
import AboutUs from './AboutUs';
import CostDesc from './CostDesc';
import Works from './Works';
import Feedbacks from './Feedbacks';
import Cta from './Cta';

const Main = () => {
  return (
    <main className="main">
      <Home />
      <AboutUs />
      <CostDesc />
      <Works />
      <Feedbacks />
      <Cta />
    </main>
  );
};

export default Main;