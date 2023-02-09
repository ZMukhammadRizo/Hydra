import React from 'react';
import styled from 'styled-components';
import { AboutTitle } from './constant';

const Container = styled('div')`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 7%;
  width: 100%;
  height: 167px;
  background: radial-gradient(50% 2900.76% at 50% 53.89%, rgba(58, 52, 86, 0.95) 0%, #211e2e 100%);
  box-shadow: 0px 4px 4px rgba(192, 183, 232, 0.01);
  border-radius: 90px;
  color: white;
`;

const Content = styled('div')`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const InnerContent = styled('div')`
  padding: 2rem;
`;

const Header = styled('h1')``;

const Info = styled('p')``;

const Image = styled('img')``;

const About = () => {
  return (
    <Container>
      {AboutTitle.map((item, index) => (
        <Content key={index}>
          <Image src={item.icon} />
          <InnerContent>
            <Header>{item.title}</Header>
            <Info>{item.info}</Info>
          </InnerContent>
        </Content>
      ))}
    </Container>
  );
};

export default About;
