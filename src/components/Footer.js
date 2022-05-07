import IconNavbar from './IconNavbar';
import Navbar from './Navbar';
import Logo from './styles/Logo.styled';
import StyledFooter from './styles/StyledFooter.styled';
const Footer = () => {
  return (
    <StyledFooter>
      <div className='footer-container'>
        <div className='footer-left-column'>
          <Logo>loopstudios</Logo>
          <Navbar direction='column' align='start' />
        </div>
        <div className='footer-right-column'>
          <IconNavbar />
          <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
