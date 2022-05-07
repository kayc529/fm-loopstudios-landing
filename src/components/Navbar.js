import { menuItems } from '../data';
import { useState } from 'react';
import StyledNavbar from './styles/StyledNavbar.styled';

const Navbar = ({ direction, align }) => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  return (
    <StyledNavbar direction={direction} align={align}>
      <ul>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a
                href='.'
                onMouseOver={() => setActiveLinkIndex(index + 1)}
                onMouseLeave={() => setActiveLinkIndex(0)}
              >
                {item}
              </a>
              <div
                className={
                  activeLinkIndex === index + 1
                    ? 'underscore active'
                    : 'underscore'
                }
              ></div>
            </li>
          );
        })}
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
