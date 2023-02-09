import React from 'react';
import styled from 'styled-components';
import Mask from '../../images/Mask.png';
import Shape from '../../images/shape.png';

const BuildBtn = {
  margin: '3rem  0',
  textTransform: 'uppercase',
  border: 'none',
  fontWeight: 'bold',
  padding: '0.7rem 1rem',
  borderRadius: '40px',
  cursor: 'pointer',
  color: 'none',
  background: 'linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%)',
};

//Components
const Content = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7rem 0 0 0;
`;
const Infos = styled('div')``;

const Image = styled('img')`
  margin-left: 4rem;
`;

const Header = styled('h1')`
  margin: 0.8rem 0;
  font-weight: bolder;
  font-size: 46px;
  color: white;
`;

const Span = styled('span')`
  background: linear-gradient(91.57deg, #c0b7e8 -1.02%, #8176af 36.25%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Info = styled('p')`
  width: 450px;
  font-size: 16px;
  color: white;
  padding: 2rem 0;
`;

const Btn = styled('button')``;

const Icon = styled('span')`
  display: flex;
  align-items: center;
`;

const Section = () => {
  return (
    <Content>
      <Infos>
        <Header>
          <Span>Dive</Span> Into The Depths
        </Header>
        <Header>
          Of <Span>Virtual Reality</Span>
        </Header>
        <Info>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae .
        </Info>
        <Icon>
          <Btn style={BuildBtn}>Bould Your world</Btn>
          <Image src={Shape}></Image>
        </Icon>
      </Infos>
      <Image src={Mask}></Image>
    </Content>
  );
};

export default Section;
