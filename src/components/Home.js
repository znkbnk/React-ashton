import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Cards.css";
import Footer from "./Footer";
import "../Carousel.css";
import image1 from "../images/carousel1.jpg";
import image2 from "../images/carousel2.jpg";
import image3 from "../images/carousel3.jpg";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 5000,
  };

  return (
    <div>
      <div className='slider-container'>
        <Slider {...settings}>
          <div>
            <img src={image1} alt='Slide 1' />
          </div>
          <div>
            <img src={image2} alt='Slide 2' />
          </div>
          <div>
            <img src={image3} alt='Slide 3' />
          </div>
        </Slider>
      </div>

      <div className='content-container'>
        <h2>News</h2>
        Hello, this is your news content.
      </div>
      <Footer />
    </div>
  );
};

export default Home;
