import React, { useState } from 'react';
import { Button, Menu, Icon } from 'semantic-ui-react';
import './animations/menu-animation.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import MainMenu from './components/MainMenu';
import Home from './components/Home';
import Projects from './components/Projects';

const App = () => {
   const [activeItem, setActiveItem] = useState('home');
   const [homeDisplayed, setHomeDisplayed] = useState(false);
  // return (
    
  // );
  return (
    <div className="App">
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={7000}
      transitionEnter={false}
      transitionLeave={false}>
      <MainMenu activeItem={activeItem} setActiveItem={setActiveItem}/>
    </ReactCSSTransitionGroup>
    {activeItem === 'home' ? <Home homeDisplayed={homeDisplayed} setHomeDisplayed={setHomeDisplayed}/> : <div></div>}
    {activeItem === 'projects' ? <Projects /> : <div></div>}
    </div>

  );
}

export default App;