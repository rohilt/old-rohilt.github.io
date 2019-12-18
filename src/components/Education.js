import React, { useState } from 'react';
import { Accordion, Container, Divider, Grid, Header, Icon, Item, List } from 'semantic-ui-react';


const Education = () => {
  const [csCourses, setCsCourses] = useState(false);
  const [mathCourses, setMathCourses] = useState(false);
  const handleClick1 = (e) => {
    setCsCourses(!csCourses);
  };
  const handleClick2 = (e) => {
    setMathCourses(!mathCourses);
  };
  return (
    <div className="Education">
      <Divider hidden />
      <Header textAlign='center' as='h1' block>
        Education
      </Header>
      <Container>
        <Divider hidden/>
        <Item.Group>
          <Item>
            <Item.Image size='tiny'><Icon size='huge' name='university' /></Item.Image>
            <Item.Content>
              <Item.Header>
                University of Florida
              </Item.Header>
              <Item.Meta>August 2018 to December 2021</Item.Meta>
              <Item.Description>
                <List>
                  <List.Item>
                    <List.Content>Majoring in Computer Science and Mathematics</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content><Icon name='circle outline'/>4.000 GPA &ensp; <Icon name='circle outline'/> Honors Program &ensp; <Icon name='circle outline'/> Presidential Honor Roll</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <Grid columns={4}>
                        <Grid.Column>
                          <Accordion as={List}>
                            <Accordion.Title active={csCourses} onClick={handleClick1}>
                              <Icon name='dropdown'/> Computer Science Coursework
                            </Accordion.Title>
                            <Accordion.Content active={csCourses}>
                              <List.Item><List.Icon name='check circle outline'/>Programming Language Concepts</List.Item>
                              <List.Item><List.Icon name='check circle outline'/>Intro to Software Engineering</List.Item>
                              <List.Item><List.Icon name='check circle'/>Algorithms Design</List.Item>
                              <List.Item><List.Icon name='check circle'/>Data Structures and Algorithms</List.Item>
                              <List.Item><List.Icon name='check circle'/>Intro to Computer Organization</List.Item>
                              <List.Item><List.Icon name='check circle'/>Appl of Discrete Structures</List.Item>
                              <List.Item><List.Icon name='check circle'/>Programming Fundamentals 2</List.Item>

                            </Accordion.Content>
                          </Accordion>
                        </Grid.Column>
                        <Grid.Column>
                          <Accordion as={List}>
                            <Accordion.Title active={mathCourses} onClick={handleClick2}>
                              <Icon name='dropdown'/> Mathematics Coursework
                            </Accordion.Title>
                            <Accordion.Content active={mathCourses}>
                              <List.Item><List.Icon name='check circle outline'/>Combinatorics 2</List.Item>
                              <List.Item><List.Icon name='check circle outline'/>Abstract Algebra</List.Item>
                              <List.Item><List.Icon name='check circle'/>Combinatorics 1</List.Item>
                              <List.Item><List.Icon name='check circle'/>Linear Algebra</List.Item>
                              <List.Item><List.Icon name='check circle'/>Sets and Logic</List.Item>
                              <List.Item><List.Icon name='check circle'/>Elem Differential Equations</List.Item>
                              <List.Item><List.Icon name='check circle'/>Multivariable Calculus</List.Item>

                            </Accordion.Content>
                          </Accordion>
                        </Grid.Column>
                      </Grid>
                    </List.Content>
                  </List.Item>
                </List>
              </Item.Description>
            </Item.Content>
            
          </Item>
          <Item>
            <Item.Image size='tiny'><Icon size='huge' name='graduation' /></Item.Image>
            <Item.Content>
              <Item.Header>
                Land O Lakes High School
              </Item.Header>
              <Item.Meta>August 2014 to May 2018</Item.Meta>
              <Item.Description>
                <List>
                  <List.Item>
                    <List.Content>IB Diploma Programme</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content><Icon name='circle outline'/>4.000 GPA &ensp; <Icon name='circle outline'/> IB Valedictorian &ensp; <Icon name='circle outline'/> National Merit Finalist</List.Content>
                  </List.Item>
                </List>
              </Item.Description>
            </Item.Content>
            
          </Item>
        </Item.Group>
      </Container>
    </div>
  );
}

export default Education;