/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Cards.css";
import "../Carousel.css";
import image1 from "../images/carousel1.jpg";
import image2 from "../images/carousel2.jpg";
import image3 from "../images/carousel3.jpg";
import accreditation1 from "../images/accreditation1.jpg";
import accreditation2 from "../images/accreditation2.jpg";
import accreditation3 from "../images/accreditation3.png";
import accreditation4 from "../images/accreditation4.png";
import accreditation5 from "../images/accreditation5.png";
import accreditation6 from "../images/accreditation6.jpg";
import accreditation7 from "../images/accreditation7.jpg";
import accreditation8 from "../images/accreditation8.jpg";
import NewsItem from "./NewsItem";
import { news, sections } from "../data";
import ScrollToTopOnMount from "../helpers/ScrollToTopOnMount";
import { NavLink } from "react-router-dom";
import { Parallax } from "react-parallax";


const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <></>,
    nextArrow: <></>,
  };

  return (
    <div>
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
        <Parallax
          blur={{ min: -20, max: 20 }}
          bgImage={require("../images/company-bg.jpg")}
          bgImageAlt='the dog'
          strength={200}
          className='parallax-background'
        >
          <div className='first'>
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
           
            </div>
          </div>
        </Parallax>
        <Parallax
          blur={{ min: -15, max: 20 }}
          bgImage={require("../images/company-bg1.jpg")}
          bgImageAlt='the dog'
          strength={200}
        >
          <div className='second'>
            <h1>Services</h1>
          </div>
          <div>
            <ul className='cards-container'>
              {sections.map((section, index) => (
                <li key={index} className='cards'>
                  <div className='content'>
                    <h2>{section.title}</h2>
                    <p>{section.description}</p>
                    <NavLink
                      to={`/Services${section.linkTo}`}
                      className='navlink'
                    >
                      Read More
                    </NavLink>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Parallax>
        <Parallax
          blur={{ min: -5, max: 15 }}
          bgImage={require("../images/company-bg2.jpg")}
          bgImageAlt='the dog'
          strength={200}
        >
          <div className='third'>
            <div className='company-info'>
              <div>
                <h1>Company Information</h1>
              </div>

              <div className='info-container '>
                <div className='left-side'>
                  <div className='service-cards'>
                    <p>
                      Ashton and Moore Ltd. (Birmingham) is an independent
                      sub-contract metal finisher who has serviced the
                      aerospace, defence and general engineering sectors since
                      1925. With 90 years of experience and technical knowledge
                      we successfully undertake a wide variety of finishes, as
                      well as NDT, providing a true “One stop shop” to over 400
                      customers throughout the UK and the rest of the world. We
                      hold approvals from many household names, such as
                      Rolls-Royce, BAe, Airbus, GE, Moog, Honeywell, UTC,
                      Messier Bugatti Dowty, Meggit, etc. (in total over 28
                      different primes). We also hold many industrial approvals
                      including; ISO 14001 and 9001, AS 9001 Rev. D and NADCAP
                      for all chemical processing and NDT processes undertaken.
                      Indeed, our prowess has been widely acknowledged and in
                      recent years and we have won awards, not only for Quality,
                      but also Environmental performance and outstanding company
                      achievement, at the Surface Engineering Association's
                      awards at the house of Lords in London. However, we are
                      not resting on our laurels and are currently installing
                      REACH compliant processes such as; TSA, Thin film
                      sulphuric anodising and Socomore (TCS/PACS), to ensure our
                      ability to continue providing our high level of service
                      well into the future.
                    </p>
                  </div>
                </div>

                <div className='right-side '>
                  <div className='service-cards'>
                    <h3>The services we provide include:</h3>
                    <table className='right-left'>
                      <tbody>
                        <tr>
                          <td>
                            <h5>Anodising</h5>
                          </td>
                          <td>
                            Sulphuric, Chromic, Thin film sulphuric, Tartaric
                            Sulphuric acid anodising
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Plating</h5>
                          </td>
                          <td>Cadmium, Silver, Lead indium</td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Passivation</h5>
                          </td>
                          <td>Stainless steel, Brass</td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Painting</h5>
                          </td>
                          <td>
                            Dry film lubricants, Ipcote,Polyurethanes, Epoxies,
                            Stove enamels, lacquers, PTFE
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5>Phosphating</h5>
                          </td>
                          <td>
                            Zinc & Manganese, Calcium modified & Low temperature
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
          <Parallax
          blur={{ min: -20, max: 20 }}
          bgImage={require("../images/stamp.jpg")}
          bgImageAlt='the dog'
          strength={200}
          className='parallax-background'>
        <div>
          <h6>Accreditadion</h6>

          <div className='accreditation-container'>
            <div className='accreditation-content'>
              <img src={accreditation1} alt='Accreditation badge'></img>
              <img
                src={accreditation2}
                alt='Certificate of accreditation'
              ></img>
              <img src={accreditation3} alt='Accreditation badge'></img>
              <img
                src={accreditation4}
                alt='Certificate of accreditation'
              ></img>
              <img src={accreditation5} alt='Accreditation badge'></img>
              <img
                src={accreditation6}
                alt='Certificate of accreditation'
              ></img>
              <img src={accreditation7} alt='Accreditation badge'></img>
              <img
                src={accreditation8}
                alt='Certificate of accreditation'
              ></img>
            </div>
          </div>
        </div>
        </Parallax>

      </div>
    </div>
  );
};

export default Home;
