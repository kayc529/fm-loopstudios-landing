import styled from 'styled-components';

const StyledIconNavbar = styled.nav`
  display: flex;

  img {
    color: white;
    width: 24px;
    height: 24px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  a {
    padding-right: 12px;
  }

  .underline {
    width: 20px;
    height: 2px;
    background-color: white;
    margin-top: 4px;
    opacity: 0;
    transition-duration: 0.3s;
  }

  .underline.active {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    & {
      margin-top: 48px;
    }
  }
`;

export default StyledIconNavbar;
