import React from 'react';
import { Container, Divider, Header, HeaderContent } from 'semantic-ui-react';
import Typist from 'react-typist';


const Home = (props) => {
  const {homeDisplayed, setHomeDisplayed} = props;
  return (
    <div className="Home">
      <Divider hidden/>
      <Container textAlign='center'>
        {homeDisplayed ? 
          <div>
            <Header as='h1'>
              Hello. My name is Rohil Tuli. 
            </Header>
            <HeaderContent>
              I'm currently working on designing my website using React JS. 
            </HeaderContent>
          </div>
          : 
          <Typist avgTypingDelay={50} cursor={{show: false, hideWhenDone: true}} onTypingDone={() => setHomeDisplayed(true)}>
            <Header as='h1'>
              Hello. My name is Rohil Tuli. 
            </Header> 
            <HeaderContent>
              I'm currently working on designing my website using React JS. 
            </HeaderContent>
          </Typist>
        }
      </Container>
    </div>
  );
}

export default Home;