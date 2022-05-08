import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  background: black;
  color: white;
  height: 160px;
  padding: 44px;
  margin-top: 184px;

  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 1110px;
    max-width: 100%;
    margin: 0 auto;
  }

  .footer-left-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-right-column {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  p {
    margin-top: 8px;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    & {
      margin-top: 96px;
      height: 470px;
      padding: 56px 51px 56px;
    }

    .footer-container {
      flex-direction: column;
      align-items: center;
    }

    h1 {
      text-align: center;
    }

    .footer-left-column {
      align-items: center;
    }

    .footer-right-column {
      align-items: center;
    }
  }
`;

export default StyledFooter;
