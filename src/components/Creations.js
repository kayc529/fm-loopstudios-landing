import CreationsGrid from './styles/CreationsGrid.styled';
import { creationList } from '../data';
import CreationsTitle from './styles/CreationsTitle.styled';

const Creations = () => {
  return (
    <>
      <CreationsTitle>
        <h1>our creations</h1>
        <button>see all</button>
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
    </>
  );
};

export default Creations;
