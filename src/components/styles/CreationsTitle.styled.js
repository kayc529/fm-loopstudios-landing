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

  @media (max-width: 768px) {
    & {
      justify-content: center;
      padding-bottom: 48px;
    }

    h1 {
      font-size: 32px;
    }

    button {
      display: none;
    }
  }
`;

export default CreationsTitle;
