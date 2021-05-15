import React from 'react';
import message from '../../images/aboutUs/message.svg'

const AboutUsMain = () => {
  return (
    <section className="aboutUsMain" id="aboutUs">
      <div className="container">
        <h2 className="aboutUsMain__title">Мы не просто создаем сайты - мы решаем задачи вашего бизнеса</h2>
        <h3 className="aboutUsMain__subtitle">Наши проекты решают ряд бизнес-задач:</h3>
        <div class="row">
          <div className="col col-4 d-flex ">
            <p className="aboutUsMain__numbers">1</p>
            <div className="aboutUsMain__cards">Презентация бизнеса на самом высоком уровне.</div>
          </div>
          <div className="col col-4 d-flex ">     
          <p className="aboutUsMain__numbers">2</p>     
            <div className="aboutUsMain__cards">Позиционирование бренда, создание имиджа компании и выделение среди конкурентов.</div>
          </div>
          <div className="col col-4 d-flex ">
          <p className="aboutUsMain__numbers">3</p>
            <div className="aboutUsMain__cards">Повышение лояльности клиентов и соответственно - продаж.</div>
          </div>
        </div>
        <p className="aboutUsMain__descr">Стек технологий, который мы используем, позволяет нам делать выбор из нескольких вариантов решения вашей задачи - самый лучший и наиболее подходящий для вас.</p>
        <div className="aboutUsMain__ellipsisBlock">
          <div className="aboutUsMain__ellipsis"></div>
          <div className="aboutUsMain__ellipsis"></div>
        </div>
        <button type="button" className="aboutUsMain__button"><img src={message} alt="message" /></button>
      </div>
    </section>
  );
};

export default AboutUsMain;