import React from 'react';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Image,
  Slide,
  Slider
} from 'pure-react-carousel';
import PropTypes from 'prop-types';

import 'pure-react-carousel/dist/react-carousel.es.css';
import '../../Styles/carousel.css';

const SliderItem = ({ index }) => (
  <Slide index={index}>
    <Image
      hasMasterSpinner={true}
      className="image-slide"
      style={{ width: '800px', height: '400px' }}
      src={
        'https://www.medisite.fr/files/styles/pano_xxl/public/images/diaporama/9/6/3/5626369/vignette-focus.jpg?itok=V5NPTzhW'
      }
    />
  </Slide>
);

const CustomCarousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1.25}
      totalSlides={3}
      infinite
      isPlaying
      interval={10000}
      className="carousel-provider">
      <Slider className="container-slide" style={{ width: '800px', height: '400px' }}>
        <SliderItem index={0} />
        <SliderItem index={1} />
        <SliderItem index={2} />
      </Slider>
      <ButtonBack className="button button-back">{'<'}</ButtonBack>
      <ButtonNext className="button button-next">{'>'}</ButtonNext>
    </CarouselProvider>
  );
};

SliderItem.propTypes = {
  index: PropTypes.number
};

export default CustomCarousel;
