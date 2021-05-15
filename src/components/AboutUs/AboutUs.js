import React from 'react';
import logo from '../../images/header/logo.svg';
import facebook from '../../images/header/facebook.svg';
import instagram from '../../images/header/instagram.svg';
import notebook from '../../images/home/notebook.svg';
import icon1 from '../../images/footer/icon.svg';
import icon2 from '../../images/footer/icon2.svg';
import icon3 from '../../images/footer/icon3.svg';

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <header className="header">
        <div className=" container d-flex justify-content-between">
         <nav className="nav">
           <div className="d-flex">
              <img src={logo} alt="logo" className="header__logo"/>
              <a href="#aboutUs" className="nav-item active">О компании</a>
              <a href="#cost-desc" className="nav-item">Услуги</a>
              <a href="#works" className="nav-item">Наши работы</a>
              <a href="#footer" className="nav-item">Контакты</a>
            </div>
          </nav>
          <div> 
            <a href="https://www.instagram.com/odigital.dev/" target="_blank"><img src={instagram} className=" header__img" alt="instagram" /></a>
            <a href="https://www.facebook.com/oracledigital.kg" target="_blank"><img src={facebook} className=" header__img" alt="facebook" /></a>
          </div>
        </div>
      </header>
      <div className="main-page" id="main-page">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p className="main-page__txt">Наша компания была основана в 2018 году. <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in facilisis metus. Nulla ligula nisl, cursus eget libero et, rutrum tincidunt justo. Fusce eget molestie lorem, eget laoreet metus. Sed sed lobortis justo, vel suscipit nunc. Sed posuere nibh eget nisl porta sollicitudin. Aenean euismod urna ligula, ut suscipit elit finibus ut.</p>
          </div>
            <div className="col-6">
            <img src={notebook} className="home__img second" alt="notebook" />
            <div className="home__ellipsisBlock">
              <div className="home__ellipse"></div>
              <div className="home__ellipse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="our-team">
      <div className="container">
        <h2 className="our-team__title">Наша команда</h2>
        <div class="row">
          <div className="col-3">
            <div className="our-team__img"></div>
            <p className="our-team__name">Jane Daw</p>
            <p className="our-team__job">Со-основатель</p>
          </div>
          <div className="col-3">
            <div className="our-team__img"></div>
            <p className="our-team__name">Jane Daw</p>
            <p className="our-team__job">Со-основатель</p>
          </div>
          <div className="col-3">
            <div className="our-team__img"></div>
            <p className="our-team__name">Jane Daw</p>
            <p className="our-team__job">Со-основатель</p>
          </div>
          <div className="col-3">
            <div className="our-team__img"></div>
            <p className="our-team__name">Jane Daw</p>
            <p className="our-team__job">Со-основатель</p>
          </div>
          <div className="col-3">
            <div className="our-team__img"></div>
            <p className="our-team__name">Jane Daw</p>
            <p className="our-team__job">Со-основатель</p>
          </div>
          <div className="col-3">
            <div className="our-team__img"></div>
            <p className="our-team__name">Jane Daw</p>
            <p className="our-team__job">Со-основатель</p>
          </div>
          <div className="col-3">
            <div className="our-team__img"></div>
            <p className="our-team__name">Jane Daw</p>
            <p className="our-team__job">Со-основатель</p>
          </div>
          <div className="col-3">
            <div className="our-team__img"></div>
            <p className="our-team__name">Jane Daw</p>
            <p className="our-team__job">Со-основатель</p>
          </div>
        </div>
      </div>
    </div>
    <div className="dev-process">
      <div className="container">
        <h2 className="dev-process__title">Как мы работаем?</h2>
        <div className=" row">
          <div className="cards col-6">
            <div className="cards__title">Создаем новое</div>
            <ul className="list">
              <li className="list-items">Анализ рынка и конкурентов</li>
              <li className="list-items">Создание концепции</li>
              <li className="list-items">Разработка (дизайн, серверная часть, фронт-часть, анимации) </li>
              <li className="list-items">Полное тестирование, релиз и поддержка продукта</li>
            </ul>
          </div>
          <div className="cards col-6">
            <div className="cards__title">Продолжаем начатое</div>
            <ul className="list">
              <li className="list-items">Веб аналитика</li>
              <li className="list-items">Контекстная реклама</li>
              <li className="list-items">Контекстная реклама</li>
              <li className="list-items">SEO продвижение</li>
            </ul>
          </div>
        </div>
        <button className="dev-process__button">Увидеть примеры работ</button>
      </div>
    </div>
    <div className="cta" id="cta">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="">
          <h2 className="cta__title">Оставить заявку на бесплатную консультацию</h2>
          <form action="" className="form">
          <div className="form__inputBlock">
            <h4 className="input__title">ФИО</h4>
            <input type="text" className="form__input" />
          </div>
          <div className="form__inputBlock">
            <h4 className="input__title">Номер телефона</h4>
            <input type="text" className="form__input" />
          </div>
          <div className="form__inputBlock">
            <h4 className="input__title">По какой услуге вы хотите получить консультацию?</h4>
            <select className="form__input">
              <option className="dropdown">Сайт хочу</option>
              <option className="dropdown">Приложение хочу</option>
            </select>
          </div>
          <button type="submit" className="form__button">Отправить</button>
          </form>
        </div>
      </div>
    </div>
    <div className="footer" id="footer">
      <div className="container">
        <div className="row">
           <div className="col-3">
             <img src={logo} alt="logo" />
             <div className="logo-line"></div>
             <p className="footer__txt">Мы находим решения</p>
           </div>
           <div className="col-3 d-flex flex-column">
             <a href="#home" className="footer__txt">Главная</a>
             <a href="#aboutUs" className="footer__txt">О компании</a>
             <a href="#cost-desc" className="footer__txt">Услуги</a>
             <a href="#works" className="footer__txt">Наши работы</a>
             <a href="#cta" className="footer__txt">Оставить заявку</a>
           </div>
           <div className="col-3 d-flex flex-column">
             <a href="https://www.instagram.com/odigital.dev/" target="_blank" className="footer__txt d-flex">
               <img src={instagram} alt="instagram"/>
               <p className="txtIcon"></p>
               instagram</a>
             <a href="https://www.facebook.com/oracledigital.kg" target="_blank" className="footer__txt d-flex">
               <img src={facebook} alt="facebook"/>
               <p className="txtIcon">facebook</p>
               </a>
           </div>
           <div className="col-3 d-flex flex-column">
            <a href="#" className=" footer__txt d-flex">
              <img src={icon2}/>
              <p className="txtIcon">+996 709 683 738</p>
              </a>
            <a href="#" className="footer__txt d-flex">
              <img src={icon2}/>
              <p className="txtIcon">+996 557 978 715</p></a>
            <a href="#" className="footer__txt d-flex">
              <img src={icon1}/>
              <p className="txtIcon">CONTACT@ODIGITAL.DEV</p></a>
            <a href="#" className="footer__txt d-flex">
              <img src={icon3}/>
              <p className="txtIcon">Кыргызстан, Бишкек, ул. Тимирязева 80</p>
            </a>
           </div>
        </div>
        <div className="footer__line"></div>
        <p className="footer__txt last">Все права защищены</p>
      </div>
    </div>

    </div>
  );
};

export default AboutUs;