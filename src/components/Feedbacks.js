import React, {useState} from 'react';
import Slider from 'react-slick';
import arrow from '../images/feedbacks/ARROW.svg';


const Feedbacks = () => {

  const cards = [  
  <div>
    <div className="d-flex">
      <div className="cards__img"></div>
      <div className="row">
        <h4 className="cards__name">Джон Ватсон</h4>
        <h5 className="cards__job">Хэд департамента маркетинга в компании “Что-то там очень крутое”</h5>
      </div>
    </div>
      <h5 className="cards__feedback">
        Наш предыдущий сайт был сделан около пяти лет назад и большая часть информации, которая там была, уже устарела и неактуальна. Разработчик, который делал нам тот сайт не выходит на связь, а админ-панель, с помощью которой мы и должны были менять контент сайта, постоянно выдавала ошибки и в целом было очень неудобно.<br/><br/>
      Тогда мы приняли решение разработать новый сайт, обратились к Oracle Digital и кроме всего остального поняли, что наш дизайн поражал бы сознание в 2000-х, но не сейчас XD.<br/><br/>
      Ребята разработали сайт буквально за пол-месяца, количество клиентов, которые пришли с сайта уже возросло в 1,5 раза.
       </h5>
  </div>,
  <div>
    <div className="d-flex">
      <div className="cards__img"></div>
      <div className="row">
        <h4 className="cards__name">Джон Ватсон</h4>
        <h5 className="cards__job">Хэд департамента маркетинга в компании “Что-то там очень крутое”</h5>
      </div>
    </div>
    <h5 className="cards__feedback">
      Наш предыдущий сайт был сделан около пяти лет назад и большая часть информации, которая там была, уже устарела и неактуальна. Разработчик, который делал нам тот сайт не выходит на связь, а админ-панель, с помощью которой мы и должны были менять контент сайта, постоянно выдавала ошибки и в целом было очень неудобно.<br/><br/>
      Тогда мы приняли решение разработать новый сайт, обратились к Oracle Digital и кроме всего остального поняли, что наш дизайн поражал бы сознание в 2000-х, но не сейчас XD.<br/><br/>
      Ребята разработали сайт буквально за пол-месяца, количество клиентов, которые пришли с сайта уже возросло в 1,5 раза.
    </h5>
</div>,
<div>
    <div className="d-flex">
     <div className="cards__img"></div>
     <div className="row">
       <h4 className="cards__name">Джон Ватсон</h4>
       <h5 className="cards__job">Хэд департамента маркетинга в компании “Что-то там очень крутое”</h5>
    </div>
  </div>
      <h5 className="cards__feedback">
        Наш предыдущий сайт был сделан около пяти лет назад и большая часть информации, которая там была, уже устарела и неактуальна. Разработчик, который делал нам тот сайт не выходит на связь, а админ-панель, с помощью которой мы и должны были менять контент сайта, постоянно выдавала ошибки и в целом было очень неудобно.<br/><br/>
      Тогда мы приняли решение разработать новый сайт, обратились к Oracle Digital и кроме всего остального поняли, что наш дизайн поражал бы сознание в 2000-х, но не сейчас XD.<br/><br/>
      Ребята разработали сайт буквально за пол-месяца, количество клиентов, которые пришли с сайта уже возросло в 1,5 раза.
       </h5>
  </div>,
  <div>
  <div className="d-flex">
   <div className="cards__img"></div>
   <div className="row">
     <h4 className="cards__name">Джон Ватсон</h4>
     <h5 className="cards__job">Хэд департамента маркетинга в компании “Что-то там очень крутое”</h5>
  </div>
</div>
    <h5 className="cards__feedback">
      Наш предыдущий сайт был сделан около пяти лет назад и большая часть информации, которая там была, уже устарела и неактуальна. Разработчик, который делал нам тот сайт не выходит на связь, а админ-панель, с помощью которой мы и должны были менять контент сайта, постоянно выдавала ошибки и в целом было очень неудобно.<br/><br/>
    Тогда мы приняли решение разработать новый сайт, обратились к Oracle Digital и кроме всего остального поняли, что наш дизайн поражал бы сознание в 2000-х, но не сейчас XD.<br/><br/>
    Ребята разработали сайт буквально за пол-месяца, количество клиентов, которые пришли с сайта уже возросло в 1,5 раза.
     </h5>
</div>
  ];

  const PrevArrow = ({ onClick }) => {
    return (
      <img src={arrow} className="feedbacks__button right" onClick={onClick}  alt="Arrow" />
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <img src={arrow} className="feedbacks__button left" onClick={onClick} alt="Arrow" />
    );
  };

  const [cardsIndex, setCardsIndex] = useState(0)

  const settings = {
    lazyLoad: true,
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 700,
    swipeToSlide: true,
    focusOnSelect: true,
    slidesToShow: 3,
    slidestoScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCardsIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="feedbacks">
      <div className="container">
        <h2 className="feedbacks__title">Отзывы</h2>
        <Slider {...settings}>
          {cards.map((el, idx) =>(
            <div className={idx === cardsIndex ? 'cards cards_active' : 'cards'}>
              {el}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Feedbacks;