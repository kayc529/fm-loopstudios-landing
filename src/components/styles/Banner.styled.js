import styled from 'styled-components';

const Banner = styled.section`
  position: relative;
  width: 1111px;
  max-width: 100%;
  height: 500px;
  margin: 160px 0 184px 0;
  display: flex;
  padding: 0 48px;

  div {
    position: absolute;
    background: white;
    width: 541px;
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

  @media (max-width: 768px) {
    & {
      flex-direction: column;
      align-items: center;
      height: auto;
      margin: 96px 0;
    }

    img {
      max-width: 100%;
      padding: 0 24px;
    }

    div {
      position: relative;
      width: 279px;
      max-width: 100%;
      padding: 0;
    }

    h1 {
      font-size: 32px;
      margin: 48px 0 16px 0;
      text-align: center;
    }

    p {
      text-align: center;
      padding: 0;
    }
  }
`;

export default Banner;
