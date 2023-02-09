import React from 'react';
import styled from 'styled-components';
import About from './components/About';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Introduction from './components/Introduction';
import Cards from './components/Cards';

const Container = styled('div')`
  padding: 2% 6%;
  width: 100%;
  height: fit-content;
  background-color: #302c42;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Section />
      <About />
      <Introduction />
      <Cards />
    </Container>
  );
};

export default App;
