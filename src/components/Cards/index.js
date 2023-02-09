import React from 'react';
import styled from 'styled-components';
import { Infos } from './constants';

const Container = styled('div')`
  display: flex;
  gap: 4rem;
`;

const Card = styled('div')`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 511px;
  background: radial-gradient(50% 50% at 50% 50%, #433d60 0%, #211e2e 100%);
  border-radius: 40px;
`;

const Image = styled('img')``;

const Header = styled('h1')`
  text-transform: uppercase;
  border-bottom: 1px solid rgba(192, 183, 232, 0.33);
`;

const Info = styled('p')`
  padding: 1.5rem 0;
  width: 80%;
`;
const Btn = styled('button')`
  padding: 1rem 3rem;
  border: none;
  font-weight: bolder;
  background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
  border-radius: 40px;
  text-transform: uppercase;
  cursor: pointer;
`;

const Cards = () => {
  console.log(Infos);
  return (
    <Container>
      {Infos.map((d, index) => (
        <Card key={index}>
          <Image src={d.img} />
          <Header>{d.title}</Header>
          <Info>{d.subTitle}</Info>
          <Btn>Try it now</Btn>
        </Card>
      ))}
    </Container>
  );
};

export default Cards;
