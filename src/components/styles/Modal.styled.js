import styled from 'styled-components';

const Modal = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
  flex-direction: column;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: black;
  padding: 40px 24px;
  color: white;

  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 159px;
  }

  img:hover {
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
  }

  li {
    padding-bottom: 24px;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 24px;
    line-height: 25px;
    color: white;
    font-family: 'Josefin Sans', sans-serif;
  }
`;

export default Modal;
