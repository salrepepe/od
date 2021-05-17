import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import '../../css/style.css'
import Body from '../Body';
import AboutUs from '../AboutUs/AboutUs'
import Popups from '../Popups';



const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={() => <Body/>} />
        <Route exact path='/aboutUs' component={() => <AboutUs />} />
      </Switch>
      <Popups />
    </BrowserRouter>
  );
};

export default App;