import CreationsGrid from './styles/CreationsGrid.styled';
import { creationList } from '../data';
import CreationsTitle from './styles/CreationsTitle.styled';
import StyledButton from './styles/StyledButton.styled';
import styled from 'styled-components';

const GridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .mobile-see-all-button {
    display: none;
  }

  @media (max-width: 768px) {
    .mobile-see-all-button {
      display: flex;
      align-self: center;
      padding-top: 34px;
    }
  }
`;

const Creations = () => {
  return (
    <GridContainer>
      <CreationsTitle>
        <h1>our creations</h1>
        <StyledButton>see all</StyledButton>
      </CreationsTitle>
      <CreationsGrid>
        {creationList.map((item) => {
          return (
            <div>
              <img
                index={item.index}
                src={require(`../images/${item.img}`)}
                alt={item.title}
              />
              <h2>{`${item.title}`}</h2>
            </div>
          );
        })}
      </CreationsGrid>
      <div className='mobile-see-all-button'>
        <StyledButton>see all</StyledButton>
      </div>
    </GridContainer>
  );
};

export default Creations;
