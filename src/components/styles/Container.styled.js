import styled from 'styled-components';

const Container = styled.div`
  width: 1440px;
  max-width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  margin: 0 auto;
  align-items: ${({ align }) => align || 'center'};
`;

export default Container;
