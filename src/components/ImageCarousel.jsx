// components/ImageCarousel.js
// import React from "react";
import Slider from "react-slick";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="path/to/images/labiales.jpg" alt="Imagen 1" />
      </div>
      <div>
        <img src="path/to/images/flower.jpg" alt="Imagen 2" />
      </div>
      <div>
        <img src="path/to/image3.jpg" alt="Imagen 3" />
      </div>
      {/* Agrega más imágenes según sea necesario */}
    </Slider>
  );
};

export default ImageCarousel;