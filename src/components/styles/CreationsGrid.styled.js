import styled from 'styled-components';

const CreationsGrid = styled.section`
  width: 1114px;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 30px;

  div {
    position: relative;
  }

  div:hover > img {
    opacity: 0.3;
  }

  div:hover > h2 {
    color: black;
  }

  h2 {
    position: absolute;
    bottom: 0;
    color: white;
    left: 40px;
    bottom: 32px;
    font-size: 32px;
    font-weight: 300;
  }

  div:nth-of-type(4) > h2 {
    width: 30%;
  }
`;

export default CreationsGrid;
