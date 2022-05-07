import styled from 'styled-components';

const CreationsTitle = styled.div`
  width: 1114px;
  max-width: 100%;
  padding-bottom: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 48px;
    font-weight: 300px;
  }

  button {
    background: white;
    border: 1px solid black;
    text-transform: uppercase;
    width: 157px;
    height: 40px;
    font-size: 14px;
    letter-spacing: 5px;
  }

  button:hover {
    background: black;
    color: white;
    cursor: pointer;
  }
`;

export default CreationsTitle;
