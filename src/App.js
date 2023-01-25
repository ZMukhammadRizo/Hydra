import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';

const Container = styled('div')`
  padding: 2rem 3rem;
  width: 100%;
  height: 100vh;
  background-color: #302c42;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default App;
