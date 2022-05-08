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

  @media (max-width: 768px) {
    & {
      width: 327px;
      align-self: center;
      justify-content: center;
      align-items: center;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(8, minmax(0, 1fr));
      row-gap: 24px;
      margin: 0 24px;
      padding: 0;
    }

    div {
      overflow: hidden;
    }

    img {
      width: 350px;
      height: 120px;
      object-fit: cover;
    }

    h2 {
      font-size: 24px;
      left: 20px;
      bottom: 20px;
      width: 140px;
    }

    div:nth-of-type(4) > h2 {
      width: 80px;
    }

    div:nth-of-type(1) > img {
      object-position: 0% 80%;
    }

    div:nth-of-type(2) > img {
      object-position: 0% 40%;
    }

    div:nth-of-type(3) > img {
      object-position: 0% 5%;
    }

    div:nth-of-type(4) > img {
      object-position: 0% 45%;
    }

    div:nth-of-type(6) > img {
      object-position: 0% 35%;
    }

    div:nth-of-type(7) > img {
      object-position: 0% 5%;
    }

    div:nth-of-type(8) > img {
      object-position: 0% 70%;
    }
  }
`;

export default CreationsGrid;
