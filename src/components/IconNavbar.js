import StyledIconNavbar from './styles/StyledIconNavbar.styled';
import { socialMediaLinks } from '../data';
import { useState } from 'react';
const IconNavbar = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  return (
    <>
      <StyledIconNavbar>
        {socialMediaLinks.map((item) => {
          return (
            <div key={item.index}>
              <a
                href={item.url}
                onMouseOver={() => setActiveLinkIndex(item.index)}
                onMouseLeave={() => setActiveLinkIndex(0)}
              >
                <img src={require(`../images/${item.img}`)} alt={item.name} />
              </a>
              <div
                className={
                  activeLinkIndex === item.index
                    ? 'underline active'
                    : 'underline'
                }
              ></div>
            </div>
          );
        })}
      </StyledIconNavbar>
    </>
  );
};

export default IconNavbar;
