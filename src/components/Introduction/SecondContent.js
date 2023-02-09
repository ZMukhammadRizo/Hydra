import React from 'react';
import styled from 'styled-components';
import Vr from './Image/Vr.png';

const AllContent = styled('div')`
  display: flex;
  justify-content: space-between;
`;

const LeftContent = styled('div')`
  width: 50%;
`;

const RightContent = styled('div')`
  width: 50%;
  color: white;
`;

const Image = styled('img')``;

const Header = styled('h1')`
  text-transform: uppercase;
  font-size: 36px;
  font-weight: bold;
  padding: 20px 0 0 0;
`;

const Info = styled('p')`
  text-transform: uppercase;
  font-size: 36px;
  font-weight: lighter;
`;

const Information = styled('p')`
  line-height: 2rem;
`;

const Btn = styled('button')`
  margin: 2rem 0;
  width: 214px;
  height: 48px;
  font-weight: bolder;
  text-transform: uppercase;
  color: none;
  background: linear-gradient(90deg, #8176af 0%, #c0b7e8 100%);
  border: none;
  border-radius: 40px;
  cursor: pointer;
`;

const SecondContent = () => {
  return (
    <AllContent>
      <LeftContent>
        <Image src={Vr} />
      </LeftContent>
      <RightContent>
        <Header>About</Header>
        <Info>HYDRA Vr</Info>
        <Information>
          Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque
          viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut
          placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
          purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper viverra nam
          libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non
          consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci
          dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam
          sollicitudi n tempor.
        </Information>
        <Btn>let's get in touch</Btn>
      </RightContent>
    </AllContent>
  );
};

export default SecondContent;
