import styled from 'styled-components';

const Banner = styled.section`
  position: relative;
  width: 1111px;
  max-width: 100%;
  height: 500px;
  margin: 160px 0 184px 0;
  display: flex;

  div {
    position: absolute;
    background: white;
    width: 541px;
    // max-width: 50%;
    height: 317px;
    bottom: 0;
    right: 0;
    padding: 96px 0 0 96px;
  }

  h1 {
    font-size: 48px;
    line-height: 48px;
    font-weight: 300;
  }

  p {
    line-height: 25px;
    font-weight: 400;
    padding-top: 25px;
    opacity: 0.5;
  }
`;

export default Banner;
