import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  height: 32px;
  justify-content: space-between;
  align-items: ${({ align }) => align || 'center'};

  ul {
    display: flex;
    list-style-type: none;
    padding-top: 16px;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 24px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .underscore {
    width: 20px;
    height: 2px;
    background-color: white;
    margin-top: 8px;
    opacity: 0;
    transition-duration: 0.3s;
  }

  .underscore.active {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    & {
      height: auto;
    }

    ul {
      flex-direction: column;
      align-items: center;
    }

    li {
      padding: 0;
    }
  }
`;

export default StyledNavbar;
