import React from 'react';
import CustomCarousel from '../Components/Images/Carousel';
import Default from '../Templates/Default';

import '../Styles/home.css';

const Home = () => {
  return (
    <Default>
      <div className="container">
        <CustomCarousel />
      </div>
    </Default>
  );
};

export default Home;
