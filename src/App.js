import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Container from './components/styles/Container.styled';
import InteractiveVRBanner from './components/InteractiveVRBanner';
import Creations from './components/Creations';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Hero />
      <Container>
        <InteractiveVRBanner />
        <Creations />
      </Container>
      <Footer />
    </>
  );
}

export default App;
