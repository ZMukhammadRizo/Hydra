import React from 'react';
import styled from 'styled-components';
import HydraLogo from '../../images/HydraLogo.png';
import Hydra from '../../images/Hydra.png';
import { Title } from './Links';

//Styles

const LogoStyle = {
  width: '100px',
  paddingRight: '10px',
  height: '100px',
};

const TextStyle = {
  width: '76px',
  height: '46px',
};

const ContactBtn = {
  border: '2px solid #ffff',
  color: '#ffff',
  background: 'none',
};

const JoinBtn = {
  color: 'none',
  background: 'linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%)',
};
//Components

const Content = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logos = styled('div')`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled('img')``;

const Links = styled('div')``;

const UnList = styled('ul')`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 56px;
  list-style: none;
  color: white;
`;

const ListItem = styled('li')`
  cursor: pointer;
  padding: 1rem;
`;

const Buttons = styled('div')``;

const Btn = styled('button')`
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  padding: 0.7rem 1rem;
  border-radius: 40px;
  margin-left: 2rem;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Content>
      <Logos>
        <Icon src={HydraLogo} style={LogoStyle} alt="Hydra Logo" />
        <Icon src={Hydra} style={TextStyle} alt="Hydra" />
      </Logos>
      <Links>
        <UnList>
          {Title.map(({ title }) => (
            <ListItem key={title}>{title}</ListItem>
          ))}
        </UnList>
      </Links>
      <Buttons>
        <Btn style={ContactBtn}>contact us</Btn>
        <Btn style={JoinBtn}>join hydra</Btn>
      </Buttons>
    </Content>
  );
};

export default Navbar;
