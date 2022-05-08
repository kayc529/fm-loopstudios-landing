import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Container from './components/styles/Container.styled';
import InteractiveVRBanner from './components/InteractiveVRBanner';
import Creations from './components/Creations';
import Footer from './components/Footer';
import MenuModal from './components/MenuModal';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <MenuModal isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero setIsMenuOpen={setIsMenuOpen} />
      <Container>
        <InteractiveVRBanner />
        <Creations />
      </Container>
      <Footer />
    </>
  );
}

export default App;
