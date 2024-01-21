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
import NewsItem from "./NewsItem";
import { news, sections } from "../data";
import ScrollToTopOnMount from "../helpers/ScrollToTopOnMount";
import { NavLink } from "react-router-dom";
import { Parallax } from "react-parallax";
import Atropos from "atropos";

const Home = () => {
  const leftAtropos = Atropos({
    el: ".left",
    activeOffset: 30,
    alwaysActive: true,
  });
   const pAtropos = Atropos({
     el: ".p",
     activeOffset: 30,
     alwaysActive: true,
   });

  const rightAtropos = Atropos({
    el: ".right",
    alwaysActive: true,
    activeOffset: 30,
  });
    const tbodyAtropos = Atropos({
      el: ".tbody",
      alwaysActive: true,
      activeOffset: 30,
    });
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
                <div class='atropos left'>
                  <div class='atropos-scale'>
                    <div class='atropos-rotate'>
                      <div class='atropos-inner'>
                        <div className='left-side'>
                          <div
                            className='service-cards'
                            data-atropos-offset='-2'
                          >
                            <div class='atropos p'>
                              <div class='atropos-scale'>
                                <div class='atropos-rotate'>
                                  <div class='atropos-inner'>
                                    <p data-atropos-offset='4'>
                                      Ashton and Moore Ltd. (Birmingham) is an
                                      independent sub-contract metal finisher
                                      who has serviced the aerospace, defence
                                      and general engineering sectors since
                                      1925. With 90 years of experience and
                                      technical knowledge we successfully
                                      undertake a wide variety of finishes, as
                                      well as NDT, providing a true “One stop
                                      shop” to over 400 customers throughout the
                                      UK and the rest of the world. We hold
                                      approvals from many household names, such
                                      as Rolls-Royce, BAe, Airbus, GE, Moog,
                                      Honeywell, UTC, Messier Bugatti Dowty,
                                      Meggit, etc. (in total over 28 different
                                      primes). We also hold many industrial
                                      approvals including; ISO 14001 and 9001,
                                      AS 9001 Rev. D and NADCAP for all chemical
                                      processing and NDT processes undertaken.
                                      Indeed, our prowess has been widely
                                      acknowledged and in recent years and we
                                      have won awards, not only for Quality, but
                                      also Environmental performance and
                                      outstanding company achievement, at the
                                      Surface Engineering Association’s awards
                                      at the house of Lords in London. However,
                                      we are not resting on our laurels and are
                                      currently installing REACH compliant
                                      processes such as; TSA, Thin film
                                      sulphuric anodising and Socomore
                                      (TCS/PACS), to ensure our ability to
                                      continue providing our high level of
                                      service well into the future.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='right-side '>
                  <div className='atropos right'>
                    <div className='atropos-scale'>
                      <div className='atropos-rotate'>
                        <div className='atropos-inner'>
                          <div
                            className='service-cards'
                            data-atropos-offset='-2'
                          >
                            <div className='atropos tbody'>
                              <div className='atropos-scale'>
                                <div className='atropos-rotate'>
                                  <div className='atropos-inner'>
                                    <div data-atropos-offset='4'>
                                      <h4>The services we provide include:</h4>
                                      <tbody className='right-left'>
                                        <tr>
                                          <td>
                                            <h3>Anodising</h3>
                                          </td>
                                          <td>
                                            Sulphuric, Chromic, Thin film
                                            sulphuric, Tartaric Sulphuric acid
                                            anodising
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <h3>Plating</h3>
                                          </td>
                                          <td>Cadmium, Silver, Lead indium</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <h3>Passivation</h3>
                                          </td>
                                          <td>Stainless steel, Brass</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <h3>Painting</h3>
                                          </td>
                                          <td>
                                            Dry film lubricants,
                                            Ipcote,Polyurethanes, Epoxies, Stove
                                            enamels, lacquers, PTFE
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <h3>Phosphating</h3>
                                          </td>
                                          <td>
                                            Zinc & Manganese, Calcium modified &
                                            Low temperature
                                          </td>
                                        </tr>
                                      </tbody>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Home;
