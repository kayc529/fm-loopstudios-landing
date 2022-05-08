import Header from './styles/Header.styled';
import Navbar from './Navbar';
import Logo from './styles/Logo.styled';
import ic_hamburger from '../images/icon-hamburger.svg';
import { useState } from 'react';

const Hero = ({ setIsMenuOpen }) => {
  return (
    <>
      <Header>
        <div className='header-container'>
          <div className='navbar-container'>
            <Logo>loopstudios</Logo>
            <div className='navbar'>
              <Navbar />
            </div>
            <img
              className='menu-icon'
              src={ic_hamburger}
              alt='menu'
              onClick={() => setIsMenuOpen(true)}
            />
          </div>
          <section>
            <h1>immersive experiences that deliver</h1>
          </section>
        </div>
      </Header>
    </>
  );
};

export default Hero;
