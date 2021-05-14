import React from 'react';
import message from '../images/aboutUs/message.svg'

const AboutUs = () => {
  return (
    <section className="aboutUs">
      <div className="container">
        <h2 className="aboutUs__title">Мы не просто создаем сайты - мы решаем задачи вашего бизнеса</h2>
        <h3 className="aboutUs__subtitle">Наши проекты решают ряд бизнес-задач:</h3>
        <div class="row">
          <div className="col col-4 d-flex ">
            <p className="aboutUs__numbers">1</p>
            <div className="aboutUs__cards">Презентация бизнеса на самом высоком уровне.</div>
          </div>
          <div className="col col-4 d-flex ">     
          <p className="aboutUs__numbers">2</p>     
            <div className="aboutUs__cards">Позиционирование бренда, создание имиджа компании и выделение среди конкурентов.</div>
          </div>
          <div className="col col-4 d-flex ">
          <p className="aboutUs__numbers">3</p>
            <div className="aboutUs__cards">Повышение лояльности клиентов и соответственно - продаж.</div>
          </div>
        </div>
        <p className="aboutUs__descr">Стек технологий, который мы используем, позволяет нам делать выбор из нескольких вариантов решения вашей задачи - самый лучший и наиболее подходящий для вас.</p>
        <div className="aboutUs__ellipsisBlock">
          <div className="aboutUs__ellipsis"></div>
          <div className="aboutUs__ellipsis"></div>
        </div>
        <button type="button" className="aboutUs__button"><img src={message} alt="message" /></button>
      </div>
    </section>
  );
};

export default AboutUs;