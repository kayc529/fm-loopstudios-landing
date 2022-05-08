import Logo from './styles/Logo.styled';
import Modal from './styles/Modal.styled';
import ic_close from '../images/icon-close.svg';
import { menuItems } from '../data';

const MenuModal = ({ isMenuOpen, setIsMenuOpen }) => {
  console.log(isMenuOpen);
  return (
    <Modal isMenuOpen={isMenuOpen}>
      <div className='heading'>
        <Logo>loopstudios</Logo>
        <img
          src={ic_close}
          alt='icon-close'
          onClick={() => setIsMenuOpen(false)}
        />
      </div>
      <ul>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href='.'>{item}</a>
            </li>
          );
        })}
      </ul>
    </Modal>
  );
};

export default MenuModal;
