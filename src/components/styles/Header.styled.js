import styled from 'styled-components';
import image_hero from '../../images/image-hero.jpg';

const Header = styled.header`
  position: relative;
  width: 100%;
  height: 650px;
  background-image: url(${image_hero});
  background-size: cover;
  background-repeat: norepeat;

  .header-container {
    width: 1440px;
    max-width: 100%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 64px 24px 148px 24px;
    color: white;
  }

  .navbar-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  section {
    border: 1px solid white;
    width: 650px;
    max-width: 100%;
    height: 278px;
    padding: 24px 36px;
  }

  section > h1 {
    text-transform: uppercase;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 65px;
    font-weight: 300;
    letter-spacing: 5px;
    line-height: 1.2;
  }

  .menu-icon {
    width: 24px;
    height: 18px;
    color: white;
    display: none;
  }

  @media (max-width: 768px) {
    .navbar {
      display: none;
    }

    .header-container {
      padding: 40px 24px 227px 24px;
    }

    .navbar-container {
      max-width: 100%;
      align-items: center;
    }

    section {
      width: 326px;
      height: 196px;
      padding: 24px;
      align-self: center;
    }

    section > h1 {
      font-size: 40px;
      line-height: 38px;
      letter-spacing: 0;
    }

    .menu-icon {
      display: block;
    }
  }
`;

export default Header;
