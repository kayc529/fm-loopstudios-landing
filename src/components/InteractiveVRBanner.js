import Banner from './styles/Banner.styled';
import image_interactive from '../images/image-interactive.jpg';

const InteractiveVRBanner = () => {
  return (
    <Banner>
      <img src={image_interactive} alt='interactive' />
      <div>
        <h1>the leader in interactive vr</h1>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </Banner>
  );
};

export default InteractiveVRBanner;
