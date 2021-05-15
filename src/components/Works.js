import React from 'react';
import Slider from 'react-slick'
import work1 from '../images/works/work1.jpg'
import arrow from '../images/works/ARROW.svg';

const Works = () => {
  

  const NextArrow = ({ onClick }) => {
    return (
      <img src={arrow} className="works__button" onClick={onClick} alt="Arrow" />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidestoScroll: 1,
    nextArrow: <NextArrow />,
    focusOnSelect: true,
  };


  
  return (
    <section className="works" id="works">
      <div className="container">
        <h2 className="works__title">Наши работы</h2>
        <Slider {...settings}>
          <div className="works__slide">
            <img src={work1} alt="work" />
            <div className="works__cards">
              <p>
              Oracle Digital занимается разработкой сайтов и мобильных приложений.<br/><br/>
            Это молодая динамично развивающаяся компания, что и нужно было показать на их сайте.<br/><br/>
            Проанализировав рынок и конкурентов, мы поняли, что нужно сделать для того, чтобы выгодно выделить Oracle...
              </p>
              <a href="#" className="works__link">Прочитать все</a>
            </div>
         </div>
         <div className="works__slide">
            <img src={work1} alt="work" />
            <div className="works__cards">
              <p>
              Oracle Digital занимается разработкой сайтов и мобильных приложений.<br/><br/>
            Это молодая динамично развивающаяся компания, что и нужно было показать на их сайте.<br/><br/>
            Проанализировав рынок и конкурентов, мы поняли, что нужно сделать для того, чтобы выгодно выделить Oracle...
              </p>
              <a href="#" className="works__link">Прочитать все</a>
            </div>
         </div>
         <div className="works__slide">
            <img src={work1} alt="work" />
            <div className="works__cards">
              <p>
              Oracle Digital занимается разработкой сайтов и мобильных приложений.<br/><br/>
            Это молодая динамично развивающаяся компания, что и нужно было показать на их сайте.<br/><br/>
            Проанализировав рынок и конкурентов, мы поняли, что нужно сделать для того, чтобы выгодно выделить Oracle...
              </p>
              <a href="#" className="works__link">Прочитать все</a>
            </div>
         </div>
        </Slider>
      </div>
    </section>
  );
};

export default Works;