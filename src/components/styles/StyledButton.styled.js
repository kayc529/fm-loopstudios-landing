import styled from 'styled-components';

const StyledButton = styled.button`
  background: white;
  border: 1px solid black;
  text-transform: uppercase;
  width: 157px;
  height: 40px;
  font-size: 14px;
  letter-spacing: 5px;

  &:hover {
    background: black;
    color: white;
    cursor: pointer;
  }
`;

export default StyledButton;
