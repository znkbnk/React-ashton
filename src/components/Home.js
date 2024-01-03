import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Cards.css";
import "../Carousel.css";
import image1 from "../images/carousel1.jpg";
import image2 from "../images/carousel2.jpg";
import image3 from "../images/carousel3.jpg";
import NewsItem from "./NewsItem";
import { news } from "../data";
import ScrollToTopOnMount from "../helpers/ScrollToTopOnMount";


const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <></>, // Set to empty fragment to hide the default arrows
    nextArrow: <></>,
  };

  return (
    <div>
      <ScrollToTopOnMount />
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

      <div>
        <h1>News</h1>

        <div className='news-container'>
          {news.map((item, index) => (
            <NewsItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              link={`/news/${index + 1}`}
            />
          ))}
          {news.map((item, index) => (
            <NewsItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              link={`/news/${index + 1}`}
            />
          ))}
          {news.map((item, index) => (
            <NewsItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              link={`/news/${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
