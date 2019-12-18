import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';

import Resume from '../resources/RT_Resume.pdf';

const MainMenu = (props) => {
  const { activeItem, setActiveItem } = props;

  return (
      <div className="MainMenu">
      <Menu size='huge' pointing secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={() => setActiveItem('home')}
        />
        <Menu.Item
          name='education'
          active={activeItem === 'education'}
          onClick={() => setActiveItem('education')}
        />
        <Menu.Item
          name='experience'
          active={activeItem === 'experience'}
          onClick={() => setActiveItem('experience')}
        />
        <Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          onClick={() => setActiveItem('projects')}
        />
        <Menu.Menu position='right'>
          <Menu.Item href='mailto:rohil.tuli@gmail.com'>
            <Icon name='mail' />
          </Menu.Item>
          <Menu.Item href='https://www.github.com/rohilt' target='_blank'>
            <Icon name='github'/>
          </Menu.Item>
          <Menu.Item href='https://www.linkedin.com/in/rohiltuli' target='_blank'>
            <Icon name='linkedin'/>
          </Menu.Item>
          <Menu.Item href={Resume} target='_blank'>
            <Icon name='file alternate'/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
    
  );
}

export default MainMenu;