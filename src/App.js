import React, { useState } from 'react';
import { Button, Menu, Icon } from 'semantic-ui-react';
import './animations/menu-animation.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import MainMenu from './components/MainMenu';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience'

const App = () => {
   const [activeItem, setActiveItem] = useState('home');
   const [homeDisplayed, setHomeDisplayed] = useState(false);
  // return (
    
  // );
  return (
    <div className="App">
    <ReactCSSTransitionGroup
      transitionName="menu-bar"
      transitionAppear={true}
      transitionAppearTimeout={7000}
      transitionEnter={false}
      transitionLeave={false}>
      <MainMenu activeItem={activeItem} setActiveItem={setActiveItem}/>
    </ReactCSSTransitionGroup>
    <ReactCSSTransitionGroup
      transitionLeave={false}
      transitionName="page-switch"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={300}
    >
      {activeItem === 'home' ? <div key='home'><Home homeDisplayed={homeDisplayed} setHomeDisplayed={setHomeDisplayed}/></div> : <div></div>}
      {activeItem === 'projects' ? <div key='projects'><Projects /></div> : <div></div>}
      {activeItem === 'education' ? <div key='education'><Education /></div> : <div></div>}
      {activeItem === 'experience' ? <div key='experience'><Experience /></div> : <div></div>}
    </ReactCSSTransitionGroup>
    </div>

  );
}

export default App;