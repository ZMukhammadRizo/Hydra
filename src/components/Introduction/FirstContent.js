import React from 'react';
import styled from 'styled-components';
import Arrow from '../../images/Arrow.png';

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5% 0;
  color: white;
`;

const FirstConteiner = styled('div')``;

const FirstInnerContent = styled('div')`
  text-transform: uppercase;
`;

const Header = styled('h1')`
  font-size: 36px;
  font-weight: bold;
  padding: 20px 0 0 0;
`;

const Info = styled('p')`
  font-size: 36px;
`;
const Image = styled('img')`
  padding: 0 3rem;
`;

const Shit = styled('div')`
  display: flex;
  align-items: center;
`;

const SecondContent = styled('div')`
  width: 50%;
`;

const Info2 = styled('p')`
  line-height: 2rem;
  font-size: 16px;
`;

const FirstContent = () => {
  return (
    <Container>
      <FirstConteiner>
        <FirstInnerContent>
          <Header>Introduction</Header>
          <Shit>
            <Info>To Hydra VR</Info>
            <Image src={Arrow}></Image>
          </Shit>
        </FirstInnerContent>
      </FirstConteiner>
      <SecondContent>
        <Info2>
          Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed
          pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa
          tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
          in. Lectus magna fringilla urna porttitor rhoncus vitae.
        </Info2>
      </SecondContent>
    </Container>
  );
};

export default FirstContent;
